import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { servicedb } from './assets/data/data'; 
@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  constructor() 
  {

  }
  getcardDB()
  {
    return servicedb 
  }
}
