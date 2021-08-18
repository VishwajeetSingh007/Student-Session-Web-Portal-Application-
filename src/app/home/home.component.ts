import { Component, OnInit } from '@angular/core';
import{ DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  safeUrl: SafeResourceUrl | undefined;
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Wj8C_bpnkTY');
  }
  
  
}
