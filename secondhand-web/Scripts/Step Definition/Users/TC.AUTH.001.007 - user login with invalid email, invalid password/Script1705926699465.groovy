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

//WebUI.callTestCase(findTestCase('Step Definition/Initiate/Go to Test URL'), [:], FailureHandling.STOP_ON_FAILURE)
//
//WebUI.callTestCase(findTestCase('Pages/Home page/Click button login'), [:], FailureHandling.STOP_ON_FAILURE)
//
//
//WebUI.callTestCase(findTestCase('Pages/User Login/Input email'), [('email') : GlobalVariable.rizka_invalid_email], FailureHandling.STOP_ON_FAILURE)
//
//WebUI.callTestCase(findTestCase('Pages/User Login/Input password'), [('passsword') : GlobalVariable.rizka_invalid_password], 
//    FailureHandling.STOP_ON_FAILURE)
//
//WebUI.callTestCase(findTestCase('Pages/User Login/Click button submit'), [:], FailureHandling.STOP_ON_FAILURE)
WebUI.callTestCase(findTestCase('Step Definition/Initiate/Go to Test URL'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Home page/Click button login'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/User Login/Input email'), [('email') : GlobalVariable.rizka_invalid_email], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/User Login/Input password'), [('password') : GlobalVariable.rizka_invalid_password], 
    FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/User Login/Click button submit'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.verifyElementText(findTestObject('Login/alert_invalid_Email_or_password'), 'Invalid Email or password.')

