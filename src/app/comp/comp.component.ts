import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})

export class CompComponent implements OnInit {
  
  /*loginForm=new FormGroup({
    Username: new FormControl('Vishvas'),
    password: new FormControl('')
  })
  loadApiData() {
    this.loginForm.setValue({
      Username: 'Raman',
      password: 'Raman123'
    });
  }*/
  constructor(private fb:FormBuilder) {}

  loginForm=this.fb.group({
    Username:['',Validators.minLength(3)],
    password:['']
  });
  loadApiData() {
    this.loginForm.setValue({
      Username: 'Raman',
      password: 'Raman123'
    });
  }
  ngOnInit(): void {
      
  }

}
