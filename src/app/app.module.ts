import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Page
import { signInHistoryPage } from '../pages/signInHistory/signInHistory';
import { HomePage } from '../pages/home/home';
import { QrScanPage } from '../pages/QrScanPage/QrScanPage';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/loginPage/loginPage';
import { SignupPage } from '../pages/signup/signup';
import { EditProfilePage } from '../pages/editProfile/editProfile';
import { QrViewPage } from '../pages/QrViewPage/QrViewPage';
import { ChartsPage } from '../pages/charts/charts';
//Services
import { SignInService } from '../service/signIn.service';
import { MemberDetailsService } from '../service/memberDetails.service';
import { MemberService } from '../service/member.service';

import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DatePicker } from '@ionic-native/date-picker';
import { Md5 } from 'ts-md5/dist/md5';

export const firebaseConfig = {
    apiKey: "AIzaSyD474kj_BJr30KxuUlpazZ-wnvck8clCHQ",
    authDomain: "test-cc62e.firebaseapp.com",
    databaseURL: "https://test-cc62e.firebaseio.com",
    projectId: "test-cc62e",
    storageBucket: "test-cc62e.appspot.com",
    messagingSenderId: "29981412656"
};


@NgModule({
  declarations: [
    MyApp,
    QrScanPage,
    HomePage,
    signInHistoryPage,
    LoginPage,
    EditProfilePage,
    SignupPage,
    TabsPage,
    ChartsPage,
    QrViewPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrScanPage,
    HomePage,
    LoginPage,
    SignupPage,
    signInHistoryPage,
    EditProfilePage,
    TabsPage,
    ChartsPage,
    QrViewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    SignInService,
    BarcodeScanner,
    Md5,
    MemberService,
    DatePicker,
    MemberDetailsService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
