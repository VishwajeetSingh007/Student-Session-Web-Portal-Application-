import { Component, OnInit } from '@angular/core';
import{ DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  safeUrl: SafeResourceUrl | undefined;
  constructor(private _sanitizer:DomSanitizer) { }
  

  ngOnInit(): void {
    this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Wj8C_bpnkTY');
    this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Wj8C_bpnkTY');
  }

}
