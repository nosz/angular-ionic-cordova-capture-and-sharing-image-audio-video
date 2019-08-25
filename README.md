# Step by Step
## Example Ionic Angular Image Voice Video Sharing

of the  
[Ionic Framework](https://ionicframework.com/)
and  
[Angular](https://angular.io/)

## Table of Contents

- [Getting Started](#getting-started)
- [Step by Step Example Ionic Angular Image Voice Video Sharing](#step-by-step)
- [Deploying](#deploying)
  - [Android](#android)
  - [iOS](#ios)

## Getting Started

1. [Download the installer](https://nodejs.org/) for Node.js
   - check it with: `node --version`
2. Install the angular CLI globally: `npm install -g @angular/cli`
   - check it with: `ng --version`
3. Install the ionic CLI globally: `npm install -g ionic`
   - check it with: `ionic --version`
4. Install Ionic native-run `npm i -g native-run`
5. Create Ionic Template blank: `ionic start YourProjectName blank`
   - creates a new Folder with the Name: YourProjectName and with the blank template
6. Go to your newly created project: `cd .\YourProjectName`
7. Run `ionic serve` within the app directory to see your app
   - you see it in: [localhost:8100](http://localhost:8100)

## Step by Step

1. Run `ionic cordova plugin add cordova-plugin-media-capture` from the project root

   - this will create folder resources and config.xml in the project root and adding cordova-plugin-media-capture to package.json

2. Run `npm install @ionic-native/media-capture` from the project root
    - this will adding @ionic-native/media-capture to node_modules

3. Run `ionic cordova plugin add cordova-plugin-x-socialsharing`
    - this. will adding cordova-plugin-x-socialsharing to package.json

4. Run `npm install @ionic-native/social-sharing`
    -  this will adding @ionic-native/social-sharing to node_modules

5. Change the /src/app/app.module.ts

```typescript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// add MediaCapture
import { MediaCapture } from '@ionic-native/media-capture/ngx';
// add SocialSharing
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // add MediaCapture
    MediaCapture,
    // add SocialSharing
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



```
6. Change the src/app/home/home.page.ts

```typescript

import { Component } from '@angular/core';
// add MediaCapture
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
// add SocialSharing
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // add MediaCapture and SocialSharing to constructor
  constructor(
    public mediaCapture: MediaCapture,
    public socialSharing: SocialSharing
  ) {}

  // add function ShareMedia
  ShareMedia(message, subject, filepath, url) {
    this.socialSharing.share(message, subject, filepath, url).then(
      () => {},
      err => {
        alert(JSON.stringify(err));
      }
    );
  }

  // add function CaptureAndShareAudio()
  CaptureAndShareAudio() {
    this.mediaCapture.captureAudio().then(
      (audio: MediaFile[]) => {
        this.ShareMedia(
          'audio file capture by media capture plugin',
          'media capture',
          audio[0].fullPath,
          ''
        );
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }

  // add function CaptureAndShareVideo()
  CaptureAndShareVideo() {
    this.mediaCapture.captureVideo().then(
      (video: MediaFile[]) => {
        this.ShareMedia(
          'video file capture by media capture plugin',
          'media capture',
          video[0].fullPath,
          ''
        );
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }

  // add function CaptureAndShareImage()
  CaptureAndShareImage() {
    this.mediaCapture.captureImage().then(
      (image: MediaFile[]) => {
        this.ShareMedia(
          'image file capture by media capture plugin',
          'media capture',
          image[0].fullPath,
          ''
        );
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }
}


```

7. Change the src/app/home/home.page.html

```typescript

<ion-header>
  <ion-toolbar>
    <ion-title>
      Capture Media and Share
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="ion-padding">
    <!--add the functions-->
    <ion-button (click)="CaptureAndShareImage()">Capture and Share Image</ion-button><br>
    <ion-button (click)="CaptureAndShareAudio()">Capture and Share Audio</ion-button><br>
    <ion-button (click)="CaptureAndShareVideo()">Capture and Share Video</ion-button>
  </div>
</ion-content>

```

Finish :-) Ready for Deploy

### Deploy

### Android-Deploy

1. Check Android Setup: [https://ionicframework.com/docs/installation/android](https://ionicframework.com/docs/installation/android)

2. Run `ionic cordova run android --prod`
    - this will generate the apk-file for android

### iOS-Deploy

1. Check iOS Setup: [https://ionicframework.com/docs/installation/ios](https://ionicframework.com/docs/installation/ios)

2. Run `ionic cordova run ios --prod`
    
