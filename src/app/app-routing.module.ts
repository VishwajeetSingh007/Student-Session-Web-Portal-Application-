import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';

//import { ContactComponent } from './contact/contact.component';
//import {AppComponent} from './app.component';
//import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//import { CompComponent } from './comp/comp.component';


const routes: Routes =
 [ 
   //{path:'dashboard',component:DashboardComponent},
   
   
   //{
    //path: 'signIn',
     //redirectTo: ' ', pathMatch: 'full'
  // },
   //{
     //  path:'lazy1',
       //loadChildren:() => import('./customers/customers.module').then(m => m.CustomersModule)
       
   //}

   {
     path:'', component:ReactiveFormComponent
   },
   {
     path:'signIn', component:DashboardComponent
   },
   {
     path:'dashboard', component:DashboardComponent
   },
   {
     path:'homeIn', component:DashboardComponent
   },
   {
     path:'home' , component:HomeComponent
   },
   {
     path:'about', component:AboutComponent
   },
   {
     path:'sign-up', component:ReactiveFormComponent
   },
   {
     path:'services', component:ServicesComponent
   },
   {
    path:'schedule', component:ScheduleComponent
  },
  {
    path:'courses', component:CoursesComponent
  }
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
