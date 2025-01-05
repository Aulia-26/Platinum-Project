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

not_run: WebUI.callTestCase(findTestCase('Test Templates/Profile/Profile without input photo'), [('name') : GlobalVariable.profile_name
        , ('select_city') : '3', ('address') : GlobalVariable.profile_address, ('phone') : GlobalVariable.profile_phone], 
    FailureHandling.STOP_ON_FAILURE)

not_run: WebUI.callTestCase(findTestCase('Pages/Profile/Go to profile page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('Homepage/btn_profile'))

WebUI.click(findTestObject('Homepage/btn_info_profile'))

<<<<<<< HEAD
WebUI.sendKeys(findTestObject('null'), 'C:\\\\Users\\\\mpradana\\\\Downloads\\\\image.jpg')

FilePath = WebUI.getAttribute(findTestObject('null'), 'value')
=======
//img_path = (RunConfiguration.getProjectDir() + '/photo/avo.png')

not_run: WebUI.waitForElementVisible(findTestObject('Profile/uploud_profile_photo'), 5)

not_run: WebUI.uploadFile(findTestObject('Profile/uploud_profile_photo'), img_path)

WebUI.sendKeys(findTestObject('Profile/input_profile_photo'), 'C:\\\\Users\\\\mpradana\\\\Downloads\\\\image.jpg')

//WebUI.sendKeys(findTestObject('Profile/input_profile_photo'), '\\\\photo\\\\avo.png')

FilePath = WebUI.getAttribute(findTestObject('Profile/input_profile_photo'), 'value')
>>>>>>> 4d22940b7efa31d09d7cd5ee917ba02c01da9529

WebUI.callTestCase(findTestCase('Pages/Profile/Select all and delete profile name'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile name'), [('name') : GlobalVariable.profile_name], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select profile city'), [('select_city') : '3'], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select all and delete profile address'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile address'), [('address') : GlobalVariable.profile_address], 
    FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Select all and delete profile phone'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Profile/Input profile phone'), [('phone') : GlobalVariable.profile_phone], FailureHandling.STOP_ON_FAILURE)

WebUI.scrollToElement(findTestObject('Profile/btn_profile_save'), 0)

WebUI.callTestCase(findTestCase('Pages/Profile/Save profile button'), [:], FailureHandling.STOP_ON_FAILURE)

not_run: WebUI.waitForElementClickable(findTestObject('Homepage/btn_homepage'), 5)

not_run: WebUI.verifyElementClickable(findTestObject('Homepage/btn_homepage'))

