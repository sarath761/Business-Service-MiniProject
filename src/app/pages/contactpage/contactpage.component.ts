import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import { Firestore,collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent {
  contactname: string='';
  contactemail: string='';
  contactnumber: any='';
  contactmessage: string='';

  constructor(private ob:AuthService,private fire:Firestore)
  {

  }

  submit()
  {
    const data={
      contactname:this.contactname,
      contactemail:this.contactemail,
      contactnumber:this.contactnumber,
      contactmessage:this.contactmessage
    }
    console.log(data);
    const docRef=collection(this.fire,"contact")
    this.ob.insertData(docRef,data)
    this.contactname='';
    this.contactemail='';
    this.contactnumber='';
    this.contactmessage='';
}
}