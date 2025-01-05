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

    var data = {"OkPercent": 95.47727272727273, "KoPercent": 4.5227272727272725};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.2681818181818182, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.3325, 500, 1500, "GET List Product"], "isController": false}, {"data": [0.02, 500, 1500, "PUT Profile"], "isController": false}, {"data": [0.31, 500, 1500, "PUT Update Offer-1"], "isController": false}, {"data": [0.35, 500, 1500, "GET Profile"], "isController": false}, {"data": [0.4875, 500, 1500, "GET List Categories"], "isController": false}, {"data": [0.5325, 500, 1500, "PUT Update Offer-0"], "isController": false}, {"data": [0.0025, 500, 1500, "POST Registration"], "isController": false}, {"data": [0.4475, 500, 1500, "PUT Update Product-0"], "isController": false}, {"data": [0.4525, 500, 1500, "GET Get Product"], "isController": false}, {"data": [0.2, 500, 1500, "PUT Update Product-1"], "isController": false}, {"data": [0.3075, 500, 1500, "GET Get Categories-1"], "isController": false}, {"data": [0.0175, 500, 1500, "DELETE Delete Product"], "isController": false}, {"data": [0.56, 500, 1500, "GET Get Categories-0"], "isController": false}, {"data": [0.02, 500, 1500, "PUT Update Product"], "isController": false}, {"data": [0.24, 500, 1500, "POST Login"], "isController": false}, {"data": [0.4975, 500, 1500, "GET List Offer"], "isController": false}, {"data": [0.025, 500, 1500, "PUT Update Offer"], "isController": false}, {"data": [0.4075, 500, 1500, "POST Create Offer"], "isController": false}, {"data": [0.0475, 500, 1500, "GET Get Categories"], "isController": false}, {"data": [0.155, 500, 1500, "DELETE Delete Product-1"], "isController": false}, {"data": [0.1125, 500, 1500, "POST Create Product"], "isController": false}, {"data": [0.375, 500, 1500, "DELETE Delete Product-0"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 4400, 199, 4.5227272727272725, 1675.7322727272679, 22, 6887, 1495.5, 2800.0, 3213.0, 4343.399999999987, 16.583622918566874, 211.29459484018474, 47.06142221173706], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET List Product", 200, 0, 0.0, 1424.515, 326, 2548, 1376.5, 1846.5, 2094.8999999999996, 2533.4400000000005, 0.8106486810745959, 9.310003233728255, 0.604139096167253], "isController": false}, {"data": ["PUT Profile", 200, 0, 0.0, 2676.775000000001, 1277, 6221, 2479.0, 3692.3, 4623.949999999999, 5708.350000000002, 0.7980081716036772, 1.2413624967082164, 6.7527077414772725], "isController": false}, {"data": ["PUT Update Offer-1", 200, 0, 0.0, 1458.275, 464, 2895, 1422.5, 1886.1000000000001, 2068.7499999999995, 2691.5600000000004, 0.8083616933560752, 24.383389752348293, 0.5871595155286281], "isController": false}, {"data": ["GET Profile", 200, 0, 0.0, 1407.3200000000002, 236, 4880, 1254.0, 2330.2000000000003, 2824.649999999999, 4514.980000000001, 0.8061915511125444, 1.252698852184779, 0.587401871372138], "isController": false}, {"data": ["GET List Categories", 200, 0, 0.0, 1073.9249999999995, 196, 2364, 1118.0, 1739.2, 1941.95, 2280.9300000000003, 0.8181297553792031, 0.8548816779841283, 0.5988006729117238], "isController": false}, {"data": ["PUT Update Offer-0", 200, 0, 0.0, 1002.5350000000002, 209, 2221, 1019.5, 1469.7, 1717.7499999999995, 2129.94, 0.8112076448208448, 1.0605826980563464, 0.6573713044421731], "isController": false}, {"data": ["POST Registration", 200, 199, 99.5, 1946.605000000001, 531, 3267, 1901.0, 2689.7, 2885.5499999999997, 3248.92, 0.7964890761523206, 0.4889501763725498, 0.6406603442027542], "isController": false}, {"data": ["PUT Update Product-0", 200, 0, 0.0, 1135.2749999999992, 42, 2765, 1141.0, 1603.2, 1904.0, 2509.140000000001, 0.8217669633245404, 0.5713848416865945, 8.17006492986219], "isController": false}, {"data": ["GET Get Product", 200, 0, 0.0, 1141.0299999999997, 42, 3554, 1125.0, 1516.6, 1607.4499999999998, 1956.3600000000006, 0.817457625040362, 1.8169712058215244, 0.6078244489313785], "isController": false}, {"data": ["PUT Update Product-1", 200, 0, 0.0, 1638.9150000000002, 233, 3100, 1605.5, 2257.5, 2450.85, 3071.250000000001, 0.8228657947032129, 25.912574237923415, 0.5983937916832954], "isController": false}, {"data": ["GET Get Categories-1", 200, 0, 0.0, 1365.9899999999996, 291, 2153, 1406.0, 1803.8, 1902.35, 2126.2800000000007, 0.8124994921878174, 24.39836792973098, 0.5803975864702585], "isController": false}, {"data": ["DELETE Delete Product", 200, 0, 0.0, 3214.659999999999, 216, 6887, 3199.5, 4262.0, 4763.4, 6727.9400000000005, 0.8246130503261345, 26.551783251490487, 1.2316368981355499], "isController": false}, {"data": ["GET Get Categories-0", 200, 0, 0.0, 923.3850000000001, 123, 1763, 957.0, 1477.7, 1616.85, 1709.98, 0.8161266628580756, 0.5674630702685056, 0.5989285787154166], "isController": false}, {"data": ["PUT Update Product", 200, 0, 0.0, 2774.3700000000017, 299, 5259, 2651.0, 3689.2, 3983.85, 5146.070000000001, 0.8209809901851722, 26.424058873573035, 8.7592738782321], "isController": false}, {"data": ["POST Login", 200, 0, 0.0, 1658.16, 543, 3236, 1518.5, 2916.3000000000015, 3043.7, 3231.5300000000007, 0.7968698950522348, 1.6110234623399287, 0.6287606967332319], "isController": false}, {"data": ["GET List Offer", 200, 0, 0.0, 1040.335, 289, 2483, 1018.0, 1493.5, 1605.5, 2251.840000000002, 0.8109149147525696, 1.0800135448131856, 0.6071091896932714], "isController": false}, {"data": ["PUT Update Offer", 200, 0, 0.0, 2461.09, 860, 4480, 2460.0, 3178.7000000000003, 3588.0, 4343.400000000001, 0.8070699326096606, 25.399598135920666, 1.240239498002502], "isController": false}, {"data": ["POST Create Offer", 200, 0, 0.0, 1277.135, 457, 2452, 1274.5, 1676.3, 1816.6999999999998, 2262.3500000000004, 0.8092055220184823, 2.50455430982861, 0.6841658835917396], "isController": false}, {"data": ["GET Get Categories", 200, 0, 0.0, 2289.49, 545, 3699, 2372.5, 3100.2, 3220.85, 3446.8100000000004, 0.8113623178998698, 24.928370335680874, 1.175017444289835], "isController": false}, {"data": ["DELETE Delete Product-1", 200, 0, 0.0, 1891.3400000000004, 194, 5000, 1812.0, 2726.4000000000005, 3096.1499999999996, 4705.84, 0.8310790314604968, 26.182122269385957, 0.6040094109311824], "isController": false}, {"data": ["POST Create Product", 200, 0, 0.0, 1741.8150000000003, 885, 2879, 1743.0, 2177.9, 2403.0, 2845.3800000000006, 0.8059998629800234, 1.7895873129576567, 14.135411503230044], "isController": false}, {"data": ["DELETE Delete Product-0", 200, 0, 0.0, 1323.1699999999996, 22, 3123, 1298.5, 1927.3000000000002, 2081.3999999999996, 3046.730000000006, 0.8252731654177532, 0.5738227478295316, 0.6328330028802034], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["401/Unauthorized", 199, 100.0, 4.5227272727272725], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 4400, 199, "401/Unauthorized", 199, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["POST Registration", 200, 199, "401/Unauthorized", 199, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
