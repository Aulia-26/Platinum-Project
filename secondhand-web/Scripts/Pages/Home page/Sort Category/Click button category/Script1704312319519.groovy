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
import org.openqa.selenium.WebElement as WebElement

if (catName == GlobalVariable.cat_baju) {
    WebUI.callTestCase(findTestCase('Pages/Home page/Sort Category/Click button category baju'), [:], FailureHandling.STOP_ON_FAILURE)
} else if (catName == GlobalVariable.cat_elektronik) {
    WebUI.callTestCase(findTestCase('Pages/Home page/Sort Category/Click button category elektronik'), [:], FailureHandling.STOP_ON_FAILURE)
} else if (catName == GlobalVariable.cat_hobi) {
    WebUI.callTestCase(findTestCase('Pages/Home page/Sort Category/Click button category hobi'), [:], FailureHandling.STOP_ON_FAILURE)
} else if (catName == GlobalVariable.cat_kendaraan) {
    WebUI.callTestCase(findTestCase('Pages/Home page/Sort Category/Click button category kendaraan'), [:], FailureHandling.STOP_ON_FAILURE)
} else if (catName == GlobalVariable.cat_kesehatan) {
    WebUI.callTestCase(findTestCase('Pages/Home page/Sort Category/Click button category kesehatan'), [:], FailureHandling.STOP_ON_FAILURE)
} else if (catName == GlobalVariable.cat_semua) {
    WebUI.callTestCase(findTestCase('Pages/Home page/Sort Category/Click button category semua'), [:], FailureHandling.STOP_ON_FAILURE)
}

