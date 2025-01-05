/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 61.0, "KoPercent": 39.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.27541666666666664, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.015, 500, 1500, "GET Seller Product id"], "isController": false}, {"data": [0.53, 500, 1500, "GET buyer order id"], "isController": false}, {"data": [0.0425, 500, 1500, "DELETE Seller Product id"], "isController": false}, {"data": [0.0, 500, 1500, "POST Register"], "isController": false}, {"data": [0.0275, 500, 1500, "POST buyer order"], "isController": false}, {"data": [0.5175, 500, 1500, "GET buyer order"], "isController": false}, {"data": [0.385, 500, 1500, "POST Login"], "isController": false}, {"data": [0.0375, 500, 1500, "GET Seller Product"], "isController": false}, {"data": [0.0, 500, 1500, "POST Seller Product"], "isController": false}, {"data": [0.5175, 500, 1500, "GET buyer product "], "isController": false}, {"data": [0.7525, 500, 1500, "GET buyer product id"], "isController": false}, {"data": [0.48, 500, 1500, "PUT buyer order id"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2400, 936, 39.0, 1302.2024999999999, 91, 7403, 940.0, 2656.000000000001, 3274.8999999999996, 5827.949999999999, 15.238288740174479, 31.478481323969195, 115.50475913781446], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET Seller Product id", 200, 180, 90.0, 1803.77, 561, 7315, 1512.5, 2762.0, 3402.6999999999994, 7108.090000000004, 1.3630663540701162, 0.49184865022354285, 0.4672229397252058], "isController": false}, {"data": ["GET buyer order id", 200, 0, 0.0, 740.8749999999998, 138, 2013, 669.5, 1122.7, 1226.8499999999997, 1917.0400000000045, 1.4002072306701392, 0.3664604861519505, 0.47585167604805506], "isController": false}, {"data": ["DELETE Seller Product id", 200, 183, 91.5, 1299.7500000000005, 318, 6958, 1074.0, 2308.9, 2641.6499999999996, 5956.99, 1.380157475968008, 0.44518165460179004, 0.5027331431016279], "isController": false}, {"data": ["POST Register", 200, 200, 100.0, 771.91, 203, 3089, 555.0, 1504.8000000000002, 1830.9, 2746.1800000000035, 1.4066577109459069, 0.4588121830624345, 1.371456925942988], "isController": false}, {"data": ["POST buyer order", 200, 188, 94.0, 1168.895, 275, 3299, 1130.0, 1576.9, 1650.1, 2838.190000000007, 1.3833267625312113, 0.48011165176132076, 0.5579237821537014], "isController": false}, {"data": ["GET buyer order", 200, 0, 0.0, 743.7799999999999, 320, 1306, 711.0, 983.8, 1057.95, 1291.3300000000015, 1.395215805004639, 18.552010157171058, 0.46598027862459623], "isController": false}, {"data": ["POST Login", 200, 0, 0.0, 1153.9899999999989, 218, 3165, 901.0, 2020.6, 2405.0999999999995, 3086.350000000003, 1.3883971648929891, 0.6697931635323601, 0.5762390576948442], "isController": false}, {"data": ["GET Seller Product", 200, 0, 0.0, 2854.5350000000008, 665, 7317, 2733.0, 4554.6, 4898.0, 6011.97, 1.336023193362637, 8.390460502144316, 0.45012500167002895], "isController": false}, {"data": ["POST Seller Product", 200, 185, 92.5, 2695.6899999999996, 605, 7403, 2382.5, 4689.600000000001, 6310.65, 7053.040000000002, 1.325486453528445, 0.4515261837422459, 114.42479272705583], "isController": false}, {"data": ["GET buyer product ", 200, 0, 0.0, 916.18, 304, 5233, 815.0, 1334.8, 1649.0499999999995, 4473.300000000008, 1.3812822443073904, 2.2998888931094736, 0.5449590104494002], "isController": false}, {"data": ["GET buyer product id", 200, 0, 0.0, 565.2999999999997, 97, 2464, 487.0, 940.4000000000001, 1118.95, 2309.71, 1.3815112351401198, 1.165650104649476, 0.4721962229482831], "isController": false}, {"data": ["PUT buyer order id", 200, 0, 0.0, 911.7550000000002, 91, 3687, 684.0, 1676.9000000000008, 2151.499999999998, 2566.99, 1.4061335545650127, 0.36801151623381184, 0.5410318559556786], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["400/Bad Request", 573, 61.217948717948715, 23.875], "isController": false}, {"data": ["404/Not Found", 363, 38.782051282051285, 15.125], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2400, 936, "400/Bad Request", 573, "404/Not Found", 363, "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET Seller Product id", 200, 180, "404/Not Found", 180, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": ["DELETE Seller Product id", 200, 183, "404/Not Found", 183, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST Register", 200, 200, "400/Bad Request", 200, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST buyer order", 200, 188, "400/Bad Request", 188, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["POST Seller Product", 200, 185, "400/Bad Request", 185, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
