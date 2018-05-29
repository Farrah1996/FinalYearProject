import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'page-loginPage',
  templateUrl: 'loginPage.html'
})

export class LoginPage {
  memberinfo: Member = new Member();
  error: string;
  constructor(public navCtrl: NavController, public storage: Storage, private memberService: MemberService) {
    this.ngAfterViewInit();
  }
  GotoSignup() {
    this.navCtrl.push(SignupPage);
  }
  login() {
    // console.log("username",(this.userdata));
    var memberlist = this.memberService.getMemberByEmail(this.memberinfo.email);
    if (memberlist) {
      memberlist.forEach((val) => {
        if (val.length > 0) {
          var pass=Md5.hashStr(this.memberinfo.password);
          if (val[0].password == pass.toString()) {
            this.storage.set("member_id", val[0].id);
            this.navCtrl.push(TabsPage);
          }
        }
      });
    }
    this.error = "Invalid Email and Password, Please re-check your email and password";
  }
  ngAfterViewInit() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
    }
  }
}
