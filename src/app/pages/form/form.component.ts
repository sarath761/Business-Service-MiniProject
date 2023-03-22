import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import { Firestore,collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  package: string='';
  name1: string='';
  email1: string='';
  messege1: string='';

  constructor(private ob:AuthService,private fire:Firestore)
  {

  }

  submit()
  {
    const data={
      package:this.package,
      name1:this.name1,
      email1:this.email1,
      messege1:this.messege1
    }

    console.log(data);
    const docRef=collection(this.fire,"contactdata")
    this.ob.insertData(docRef,data)
    this.package='';
    this.name1='';
    this.email1='';
    this.messege1='';
  }

}
