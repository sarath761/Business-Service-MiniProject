import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Fireauth:AngularFireAuth,private router:Router) {}

  register(email: string,password:string){
    this.Fireauth.createUserWithEmailAndPassword(email,password).then( () =>{
    alert('registration successful');
    this.router.navigate(['login']);
    }, (err) =>{
    this.router.navigate(['register']);
    
    })
    }

    login(email:string, password:string){
      this.Fireauth.signInWithEmailAndPassword(email,password).then( ()=>{
        alert('logged in successful');
      localStorage.setItem('token','true');
      this.router.navigate(['/homepage'])
      }, err=>{
      alert(err.message);
      this.router.navigate(['/signin'])
      })
      }

      logout(){
        this.Fireauth.signOut().then( ()=>{
        localStorage.removeItem('token');
        this.router.navigate(['']);
        } , err => {
        alert(err.message);
        })
        }
    
}
