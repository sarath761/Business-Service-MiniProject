import { Component } from '@angular/core';
import { CardserviceService } from 'src/cardservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css']
})
export class ServicepageComponent {
constructor(private obj:CardserviceService,private r:Router)
{
  
}
digitaldb=this.obj.getcardDB();
gotopage(id:any)
{
  localStorage.setItem('id',id)
  this.r.navigate(['/singlepage'])
}

}
