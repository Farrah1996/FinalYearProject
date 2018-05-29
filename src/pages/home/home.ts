import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { signInHistoryPage } from '../signInHistory/signInHistory';
import { LoginPage } from '../loginPage/loginPage';
import { EditProfilePage } from '../editProfile/editProfile';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';
import { Chart } from 'chart.js'; 
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  signInHistory = signInHistoryPage;
  EditProfile=EditProfilePage;
  member: Member;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private memberService:MemberService) {
    storage.get('member_id').then((val) => {
      if(val==null){
        this.navCtrl.setRoot(LoginPage);
      }else{
        let obs:Observable<Member[]>=memberService.getMember(val);
        obs.subscribe((member_info:Member[])=>{
          this.member=member_info[0]
        });
      }
    });
  }

  logout(){
    this.storage.remove('member_id');
    this.navCtrl.setRoot(LoginPage);
  }
}
