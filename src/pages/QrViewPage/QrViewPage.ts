import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Member } from '../../model/member';
import * as firebase from 'firebase';
import { MemberService } from '../../service/member.service';

declare var require: any;
var img;

@Component({
  selector: 'page-QrViewPage',
  templateUrl: 'QrViewPage.html'
})
export class QrViewPage {
  member:Observable<Member[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,private memberService: MemberService) {
    storage.get('id').then((val) => {
      this.member=memberService.getMember(val);
    });
  }

  ionViewDidLoad() {
    this.storage.get('member_id').then((val) => {
    var storageRef = firebase.storage().ref('/images/'+val);

    storageRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    img = document.getElementById('myimg');
    img.src = url;
    console.log(this.img.src)
  }).catch(function(error) {
    // Handle any errors
  });
})
  }
}
