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

Mobile.startApplication('app/secondhand-24082023.apk', false)

//Mobile.tap(findTestObject('Product/sandbox-login/btn_Akun2'), 0)
//
//Mobile.tap(findTestObject('Product/sandbox-login/btn_Masuk'), 0)
//
//Mobile.sendKeys(findTestObject('Product/sandbox-login/input_Masukkan email'), 'budy@gmail.com')
//
//Mobile.sendKeys(findTestObject('Product/sandbox-login/input_Masukkan password'), 'test123')
WebUI.callTestCase(findTestCase('Pages/Profile/Click menu akun'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Object Repository/Profile/Lgn - Btn Masuk'), 0)

Mobile.setText(findTestObject('Object Repository/Profile/Lgn - Field Masukkan email'), 'budy@gmail.com', 0)

Mobile.setText(findTestObject('Object Repository/Profile/Lgn - Field Masukkan password'), 'tes123', 0)

Mobile.tap(findTestObject('Object Repository/Profile/Lgn - Btn Submit Masuk'), 0)

Mobile.tap(findTestObject('Homepage/btn_add'), 0)

Mobile.setText(findTestObject('Product/input_Nama Produk'), 'Appium', 0)

Mobile.setText(findTestObject('Product/input-Harga'), '99000', 0)

Mobile.tap(findTestObject('Product/select_Pilih Kategori'), 20)

Mobile.tap(findTestObject('Product/select0-kategori'), 20)

Mobile.tap(findTestObject('Product/select_Pilih Kategori'), 20)

Mobile.tap(findTestObject('Product/select0-kategori'), 20)

Mobile.hideKeyboard()

Mobile.setText(findTestObject('Product/input_Lokasi Produk'), 'Jakarta Barat', 0)

Mobile.hideKeyboard()

Mobile.setText(findTestObject('Product/input_Deskripsi'), 'qawsedrftg', 0)

Mobile.hideKeyboard()

Mobile.tap(findTestObject('Product/input_Foto produk'), 0)

Mobile.tap(findTestObject('Product/btn_galeri'), 0)

Mobile.tap(findTestObject('Product/image01'), 0)

Mobile.tap(findTestObject('Product/btn_Terbitkan'), 0)

Thread.sleep(5000)

