import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { TabsPage } from '../tabs/tabs';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {
  member:Member=new Member();
  error:string;
  constructor(public navCtrl: NavController,public storage:Storage,private memberService:MemberService){
    storage.get('member_id').then((val) => {
      let obs:Observable<Member[]>=memberService.getMember(val);
      obs.subscribe((member_info:Member[])=>{
        this.member=member_info[0]
      });
    });
  }
  editProfile(){
    // this.userService.pushUser(this.user);
    if(this.memberService.updateMember(this.member)){
      this.navCtrl.push(TabsPage);
    }
  }
}
