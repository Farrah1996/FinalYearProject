import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SignInService } from '../../service/signIn.service';
import { SignIn } from '../../model/signIn';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-QrScanPage',
  templateUrl: 'QrScanPage.html'
})
export class QrScanPage {
  qr = null;
  generateCode = null;
  scannedCode = null;
  signIn: SignIn = new SignIn();
  constructor(private barcodeScanner: BarcodeScanner, private signInService: SignInService,
    private memberService: MemberService, private storage: Storage, private toastCtrl: ToastController) {
    this.scanCode(); 
  }

  generatedCode() {
    this.generateCode = this.qr;
  }

  scanCode() {
    this.storage.get('member_id').then((val)=>{
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.text != "") {
        let result: Observable<Member[]> = this.memberService.getMember(barcodeData.text);
        result.subscribe((member_info: Member[]) => {
          this.signIn.signIn_id = barcodeData.text;
          this.signIn.member_name = member_info[0].firstname+' '+member_info[0].lastname;
          var current_date = new Date();
          this.signIn.signIn_date = current_date.getFullYear().toString() + '-' + (current_date.getMonth() + 1).toString() + '-' + (current_date.getDate()<10?"0"+current_date.getDate():current_date.getDate().toString())
          this.signIn.signIn_time = current_date.getHours().toString() + ':' + (current_date.getMinutes()<10?"0"+current_date.getMinutes().toString():current_date.getMinutes().toString())
          this.signInService.newSignIn(this.signIn);
          this.scanCode();
        })
        this.storage.get('member_id').then((val) => {
          this.signIn.member_id=val;
        });
        let toast = this.toastCtrl.create({
          message: 'Member Signed In',
          duration: 1500
        });
        toast.present();
      }
    }, (err) => {
      console.log('Error: ', err);
    });
  });
  }
}
