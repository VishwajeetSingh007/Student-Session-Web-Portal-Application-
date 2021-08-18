import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signInForm!: FormGroup;
  isPassword:Boolean=false;
  isError:Boolean=false;
  errorMessage='';
  

  constructor(private formBuilde:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.initSignInForm()
  }
  initSignInForm(){
    this.signInForm=this.formBuilde.group({
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });
  }
  togglePassword(){
    this.isPassword=!this.isPassword;
  }
  //signIn(name:string):void{
    //this.router.navigate(['/dashboard']);
    signIn =  () => {
      this.router.navigateByUrl('/dashboard');
  }
}
