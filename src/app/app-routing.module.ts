import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';
import { ServicepageComponent } from './pages/servicepage/servicepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';


const routes: Routes = [
  

  {
  path:'',component:LoginComponent
  },
  {
    path:'homepage',component:HomepageComponent
  },
  {
    path:'servicepage',component:ServicepageComponent
  },
  {
    path:'projectpage',component:ProjectpageComponent
  },
  {
    path:'contactpage',component:ContactpageComponent
  },
  
  {
    path:'aboutpage',component:AboutpageComponent
  },

  {
    path:'singlepage',component:SinglepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
