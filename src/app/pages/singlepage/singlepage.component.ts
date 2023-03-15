import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { CardserviceService } from 'src/cardservice.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  data:any
constructor(private d:CardserviceService){}
ngOnInit()
{
  let id:any=localStorage.getItem('id');
  let ar=this.d.getcardDB();
  this.data=ar.filter(e=>e.id===id);

}
buttonclick()
{
  alert("Not linked with database")
}
}
