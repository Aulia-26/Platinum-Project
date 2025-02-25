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

//Mobile.tap(findTestObject('Product/sandbox-login/btn_Akun2'), 0)
//
//Mobile.tap(findTestObject('Product/sandbox-login/btn_Masuk'), 0)
//
//Mobile.sendKeys(findTestObject('Product/sandbox-login/input_Masukkan email'), 'budy@gmail.com')
//
//Mobile.sendKeys(findTestObject('Product/sandbox-login/input_Masukkan password'), 'test123')
WebUI.callTestCase(findTestCase('Pages/Profile/Click menu akun'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Profile/Lgn - Btn Masuk'), 0)

Mobile.setText(findTestObject('Object Repository/Profile/Lgn - Field Masukkan email'), 'budy@gmail.com', 0)

Mobile.setText(findTestObject('Object Repository/Profile/Lgn - Field Masukkan password'), 'tes123', 0)

Mobile.tap(findTestObject('Object Repository/Profile/Lgn - Btn Submit Masuk'), 0)

Mobile.tap(findTestObject('Homepage/btn_add produk'), 0)

WebUI.callTestCase(findTestCase('Pages/Product/Change nama produk'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Change harga produk'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Change kategori produk'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Change lokasi'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Change deskripsi'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Click Foto Produk'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Product/Click Preview'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.verifyMatch('Appium', 'Appium', false)

Thread.sleep(5000)

