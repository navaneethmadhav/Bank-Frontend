import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    acno="";
    pswd="";
    uname="";

    //register model
    registerForm=this.fb.group({//group
      uname:[''],
      acno:[''],
      pswd:['']
    })
    //control -  ts file model link to html file

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    // alert('Register clicked')

    console.log(this.registerForm);
    
    var username=this.registerForm.value.uname;
    var password=this.registerForm.value.pswd;
    var acno=this.registerForm.value.acno;
    const result=this.ds.register(acno,username,password);
    if(result){
      alert('Register Suuccessful')
      this.router.navigateByUrl('')
    }
    else{
      alert('Register Failed')
      this.router.navigateByUrl('register')
    }
  }
}
