import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { MemberDetails } from "../model/memberDetails";


@Injectable()
export class MemberDetailsService {
    constructor(public firebase:AngularFireDatabase){
        
    }
    getMembersDetailsofMembers(id:string):Observable<MemberDetails[]>{
        console.log("Member Details Service : get member details list");
        return this.firebase.list('Members Details/',ref => ref.orderByChild('member_id').equalTo(id)).valueChanges();
    }
    getMemberDetails(member_id:string):Observable<MemberDetails[]>{
        console.log("Member Service : get member");
        return this.firebase.list('Members Details',ref => ref.orderByChild('member_id').equalTo(member_id)).valueChanges();
    }
    pushMemberDetails(info:MemberDetails):string{
        console.log("Member Details Service: Add new member details information");
        var Ran = this.firebase.list('Members Details').push(null);
        console.log(Ran.key);
        info.member_id=Ran.key;
        Ran.set(info);      
        return Ran.key
    }
}