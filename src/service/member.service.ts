import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { Member } from ".././model/member";


@Injectable()
export class MemberService {
    constructor(public firebase:AngularFireDatabase){
        
    }
    getMembers():Observable<Member[]>{
        console.log("Member Service : get members list");
        return this.firebase.list('Member').valueChanges();;
    }
    getMember1(member_id:string):Observable<Member[]>{
        console.log("Member Service: get Members list of Member");
        return this.firebase.list('Member/',ref => ref.orderByChild('id').equalTo(member_id)).valueChanges();
    }
    getMember(id:string):Observable<Member[]>{
        console.log("Member Service : get member");
        return this.firebase.list('Member',ref => ref.orderByChild('id').equalTo(id)).valueChanges();
    }
    getMemberByEmail(email:string):Observable<Member[]>{
        console.log("Member Service : get member");
        return this.firebase.list('Member/',ref => ref.orderByChild('email').equalTo(email)).valueChanges();
    }
    pushMember(info:Member):string{
        var Ran = this.firebase.list('Member').push(null);
        console.log(Ran.key);
        info.id=Ran.key;
        Ran.set(info);      
        return Ran.key
    }
    updateMember(info:Member):boolean{
        console.log(JSON.stringify(info));
        this.firebase.list('Member').set(info.id+"",info);
        return true
    }
}