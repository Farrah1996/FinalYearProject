import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { SignIn } from '../../model/signIn';
import { SignInService } from '../../service/signIn.service';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';


@Component({
  selector: 'page-signInHistory',
  templateUrl: 'signInHistory.html'
})
export class signInHistoryPage {
  member: Member;
  createdCode:string;
  signIns: Observable<SignIn[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private signInService: SignInService, private memberService: MemberService) {
    storage.get('member_id').then((val)=>{
    console.log("Member info: ",val);
    this.signIns = signInService.getSignInOfMember(val);
    let result:Observable<Member[]>=memberService.getMember(val);
    result.subscribe((member_info:Member[])=>{
      this.member=member_info[0]
    });
  })
}
}
