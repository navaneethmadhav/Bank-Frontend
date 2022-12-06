import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//deposit properties
  acno="";
  pswd="";
  amount="";

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

//withdraw properties
  acno1="";
  pswd1="";
  amount1="";

  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  //current user- login name
  user="";

  sdate:any;

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser
    this.sdate=new Date()
   }

  ngOnInit(): void {
    if (!localStorage.getItem('currentAcno')) {
      alert('Please login first')
      this.router.navigateByUrl('')
    }
  }

  deposit(){
    // alert('clicked');
    console.log(this.depositForm);
    
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    if (this.depositForm.valid) {

      console.log(this.depositForm.get('acno')?.errors);
      
      const result=this.ds.deposit(acno,pswd,amount);
      if(result){
        alert(`${amount} is credited...Available balance is ${result}`)
      }
      else{
        alert('Transaction error')
      }
    }
    else{
      alert('Invalid Details')
    }
    
  }

  withdraw(){
    // alert('clicked');
    console.log(this.withdrawForm);
    
    var acno=this.withdrawForm.value.acno1;
    var pswd=this.withdrawForm.value.pswd1;
    var amount=this.withdrawForm.value.amount1;
    if(this.withdrawForm.valid){

      console.log(this.withdrawForm.get('acno1')?.errors);
      
      const result=this.ds.withdraw(acno,pswd,amount);
      if(result){
          alert(`${amount} is debited...Available balance is ${result}`)
      
      }
    
      else{
        alert('Transaction error')
      }
    }
    else{
      alert('Invalid Details')
    }
    
  }

  logout(){
    //remove username and acno
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl('')
  }

  delete(){
    // alert('clicked')
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
  }

  onCancel(){
    this.acno="";
  }
}
