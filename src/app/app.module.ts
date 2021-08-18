import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CompComponent } from './comp/comp.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ScheduleComponent } from './schedule/schedule.component';
import  dayGridPlugin  from '@fullcalendar/daygrid';
import { CoursesComponent } from './courses/courses.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  
]);

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    ContactComponent,
    ReactiveFormComponent,
    CompComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SignUpComponent,
    ScheduleComponent,
    CoursesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule ,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,  
    FullCalendarModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
