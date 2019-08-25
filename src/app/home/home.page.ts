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
