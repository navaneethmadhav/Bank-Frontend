import { Component, OnInit } from '@angular/core';
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

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  register(){
    // alert('Register clicked')
    var username=this.uname;
    var password=this.pswd;
    var acno=this.acno;
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
