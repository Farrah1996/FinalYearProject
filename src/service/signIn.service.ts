import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { SignIn } from "../model/signIn";


@Injectable()
export class SignInService {
    constructor(public firebase:AngularFireDatabase){
    }
    getSignInOfMember(signIn_id:string):Observable<SignIn[]>{
        console.log("Sign In Service : get Sign In of Member")
        return this.firebase.list('Sign In/'+signIn_id).valueChanges()
    }
    getSignInOfMember1(member_id:string):Observable<SignIn[]>{
        console.log("Sign In Service : get Sign In of Member")
        return this.firebase.list('Sign In/'+member_id).valueChanges()
    }
    newSignIn(signIn:SignIn):boolean{
        this.firebase.list('Sign In/'+signIn.signIn_id).set(signIn.signIn_date+' '+signIn.signIn_time,signIn);
        return true;
    }  
}