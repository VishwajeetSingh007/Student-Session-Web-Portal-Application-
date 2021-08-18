import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  display(){
    return 'Welcome in droid';
  }
}
