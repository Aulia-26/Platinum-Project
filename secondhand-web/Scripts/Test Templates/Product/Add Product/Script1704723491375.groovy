import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.callTestCase(findTestCase('Pages/Product/Click button jual'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Input product name'), [('name') : product_name], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Input product price'), [('price') : price_product], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Select category product'), [('select_category') : select_category], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Input deskripsi'), [('deskripsi') : product_desc], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Upload Foto'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.scrollToElement(findTestObject('Product/label_Terbitkan'), 0)

WebUI.callTestCase(findTestCase('Pages/Product/Save Terbitkan'), [:], FailureHandling.STOP_ON_FAILURE)

