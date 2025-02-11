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
import org.openqa.selenium.WebDriverException as WebDriverException
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration

WebUI.callTestCase(findTestCase('Pages/Profile/Go to profile page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile photo'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select all and delete profile name'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile name'), [('name') : name], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select profile city'), [('select_city') : select_city], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select all and delete profile address'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile address'), [('address') : address], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select all and delete profile phone'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile phone'), [('phone') : phone], FailureHandling.STOP_ON_FAILURE)

WebUI.scrollToElement(findTestObject('Profile/btn_profile_save'), 0)

WebUI.callTestCase(findTestCase('Pages/Profile/Save profile button'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.waitForElementClickable(findTestObject('Homepage/btn_homepage'), 5)

WebUI.verifyElementClickable(findTestObject('Homepage/btn_homepage'))

