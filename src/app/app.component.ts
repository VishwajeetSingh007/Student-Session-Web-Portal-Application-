import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue'];
  userModel=new User('Rob','rob@test.com',1234567890,' ','morning',true);

  title = 'my-first-project';
  text!: string;
  constructor( private MyService:MyServiceService, private router:Router
  ){}
  ngOnInit(){

    this.text=this.MyService.display();
  }
 }
