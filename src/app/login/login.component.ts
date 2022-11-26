import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//string interpolation - {{aim}} in html file
  aim="Your Perfect Banking Partner";
//property binding -[placeholder]="account" in html file
  account="Enter your Acc no. here";

  acno=' ';
  pswd=' ';
  
  //(3rd execution)
//class - collection of properties and methods
//properties/varibles
//userdefined methods(4th execution)



  //dependency injection
  constructor(private ds:DataService,private router:Router) { //(1st execution)
    //It automatically invoke when the object is created.
  }

  ngOnInit(): void {//(2nd execution)
    //for initial process of component
    //lifecycle hook of Angular
  }

  

  acnoChange(event:any){
    console.log(event);

    this.acno=event.target.value; //1000
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  login(a:any,p:any){
    // alert('Login Clicked');
    var acno=a.value; //1000
    var pswd=p.value; //1000
    var userDetails=this.ds.userDetails;

    const result=this.ds.login(acno,pswd)
    if(result){
      alert('login successful');
        this.router.navigateByUrl('dashboard');
    }
    else{
      alert('Login failed');
    }

    // if(acno in userDetails){
    //   if(pswd==userDetails[acno]['password']){
    //     alert('login successful');
    //     this.router.navigateByUrl('dashboard');
    //   }
    //   else{
    //     alert('invalid password');
    //   }
    // }
    // else{
    //   alert('invalid user details');
    // }
  }


  // login(){
  //   // alert('Login Clicked');
  //   var acno=this.acno; //1000
  //   var pswd=this.pswd; //1000
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('login successful');
  //     }
  //     else{
  //       alert('invalid password');
  //     }
  //   }
  //   else{
  //     alert('invalid user details');
  //   }
  // }

}
