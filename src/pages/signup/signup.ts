import { TabsPage } from '../tabs/tabs';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';
import * as firebase from 'firebase';
import { Md5 } from 'ts-md5/dist/md5';


declare var require: any;
let QRCode = require('qrcode');
var currentdate = new Date();


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  @Input('qrc-value') value = 'https://www.techiediaries.com';
  @Input('qrc-version') version : '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39'|'40' | '' = '';

  @Input('qrc-errorCorrectionLevel') errorCorrectionLevel : 'L' | 'M' | 'Q' | 'H' = 'M';

  image;

  member:Member=new Member();
  error:string;
  constructor(public navCtrl: NavController,public storage:Storage,private memberService:MemberService){
  }

  signup(){
    if(this.matchPassword(this.member)){
      console.log("Passwords Dont Match!!!");
      this.error ="Password and Confirm Password Dont Match";
    }else if(this.member.password.length<6){
      console.log("Password is too short");
      this.error ="Password is too short (min 6 chars).";
    }else if(this.checkValidEmail(this.member.email)){
      console.log("Email address already in System ");
      this.error ="Email address entered already in system";
    }else{
      this.deleteconfirm(this.member);
      var pass=Md5.hashStr(this.member.password);
      this.member.password=pass.toString();
      this.member.add_date = "Date: "+ currentdate.getDate() + "-" + (1+currentdate.getMonth()) 
      + "-" + currentdate.getFullYear() + " Time: " 
      + currentdate.getHours() + ":" 
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();;
      this.value=this.memberService.pushMember(this.member)

      this.storage.get('id').then((val) => {
        if (val != null) {
          this.member.id = val;
        }
        else{
          console.log(this.member);
          this.member.id = this.member.id;
          this.toDataURL().then((url)=>{
            this.image = url;
            console.log(url);
            var storageRef = firebase.storage().ref('/images/'+this.member.id+'/');
            var imageRef = firebase.database().ref('/URL For QR Codes/'+this.member.id+'/');
            
            storageRef.putString(this.image, 'data_url').then(function(snapshot) {
            console.log('Uploaded a base64 string!');

            storageRef.getDownloadURL().then((url) => {
              imageRef.child('/').set(url);
              }); 
          })
            this.navCtrl.setRoot(TabsPage);
          }).catch((e)=>{
            console.error(e);
          })
        }
      })
        }
      }

    matchPassword(group): boolean {
      if (group.password==group.password2) {
        return false;
      }
      return true;
    }
    deleteconfirm(group):any{
      delete group.password2;
    }
    checkValidEmail(email):any{
      let result=this.memberService.getMemberByEmail(email);
      console.log(result);
      result.subscribe((k:Member[])=>{
        if(k.length>0){
          return false;
        }else{
          return true;
        }
      });
    }

    toDataURL(){
      return new Promise((resolve,reject)=>{
        QRCode.toDataURL(this.value, { version : this.version , errorCorrectionLevel : this.errorCorrectionLevel } ,function (err, url) {
          if(url){
            //console.log(url);
            resolve(url);
          }
          else{
            console.error(err);
            reject(err);
          }
        })      
      });
    }
}
