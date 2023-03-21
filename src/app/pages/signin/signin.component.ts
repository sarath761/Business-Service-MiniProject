import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  fullname: string='';
  email: string='';
  password: string='';
  cpassword: string='';

constructor(private auth: AuthService){}
  ngOnInit(): void {
  }
registerUser(){
  if(this.email == ''){
    alert('please enter email');
    return;
  }
  if(this.password==''){
  alert('please enter password');
  return;
  }
  if(
    this.fullname==''){
    alert('please enter username');
    return;
    }
    if(this.cpassword==''){
      alert('please enter phone');
      return;
      }
  this.auth.register(this.email,this.password)
  this.email='';
  this.password='';
  this.fullname='';
  this.cpassword='';
  }

}

