import { Component, OnInit ,ChangeDetectorRef, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  //mobileQuery: MediaQueryList;

  constructor(private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
   // this.mobileQuery = media.matchMedia('(max-width: 600px)');
   // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   // this.mobileQuery.addListener(this._mobileQueryListener);
   }
  

  ngOnInit(): void {
  }
  homeIn =  () => {
   this.router.navigateByUrl('/home');
  }
  aboutUs =  () => {
    this.router.navigateByUrl('/about');
  }
  signUp =  () => {
    this.router.navigateByUrl('/sign-up');
  }
  servicesIs =  () => {
    this.router.navigateByUrl('/services');
  }
  scheduleUs =  () => {
    this.router.navigateByUrl('/schedule');
  }
  coursesIn =  () => {
    this.router.navigateByUrl('/courses');
  }
  opened = false;

  log(state: any) {
    console.log(state)


  }
  //fillerNav = Array.from({length: 20}, (_, i) => `Item ${i + 1}`);

  //fillerContent = Array.from({length: 209}, () =>
   //   `Items of Sidebr `);

  //private _mobileQueryListener: () => void;

 // ngOnDestroy(): void {
   // this.mobileQuery.removeListener(this._mobileQueryListener);
  //}

 // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
