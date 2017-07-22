import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HikesPage } from '../pages/hikes/hikes';
import { HikeCurrentPage } from '../pages/hike-current/hike-current';
import { HikeDetailsPage } from '../pages/hike-details/hike-details';
import { HikeService } from '../services/hike';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HikesPage,
    HikeCurrentPage,
    HikeDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HikesPage,
    HikeCurrentPage,
    HikeDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HikeService
  ]
})
export class AppModule {}
