import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  // acno=""
  // pswd=""
  // amount=""

  depositForm=this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  
  withdrawForm=this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  // wacno=""
  // wpswd=""
  // wamount=""

  // user=this.ds.currentUser
  user:any
  acno=""
  dLogin:Date=new Date()

  constructor(private ds:DataService , private fb:FormBuilder , private router : Router) {
    this.user=localStorage.getItem("currentUser")
   }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("Please Login")
      this.router.navigateByUrl("")
    }
  }

  deposit(){
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount
    // var result=this.ds.deposit(acno,pswd,amount)
    if(this.depositForm.valid){
      this.ds.deposit(acno,pswd,amount)
      .subscribe((result:any)=>{
        if(result)
        {
           alert(result.message)
        }
      },
      (result)=>{
          alert(result.error.message)
      }
      )
      }else{
       alert("Invalid Form")
     }
  }

  

  withdraw(){
    var acno=this.withdrawForm.value.acno
    var pswd=this.withdrawForm.value.pswd
    var amount=this.withdrawForm.value.amount
    // var result=this.ds.withdraw(wacno,wpswd,wamount)
      if(this.withdrawForm.valid){
          this.ds.withdraw(acno,pswd,amount)
          .subscribe((result:any)=>{
            if(result)
            {
               alert(result.message)
            }
          },
          (result)=>{
              alert(result.error.message)
          }
          )
          }else{
           alert("Invalid Form")
         }
     }


     deleteAtParent(){
        this.acno=JSON.parse(localStorage.getItem("currentAcc") || ' ')
     }

     onDelete(event:any){   //event receiving $event event transmit all data
          this.ds.deleteAcc(event)
          .subscribe((result:any)=>{
            if(result)
            {
               alert(result.message)
               localStorage.removeItem("token")   //removing token of the deleted account
               this.router.navigateByUrl("")
            }
          },
          (result)=>{
              alert(result.error.message)
          }
          )
     }

     onCancel(){
       this.acno=""   //october 2 1:34:34
     }
     

     logout(){
       localStorage.removeItem("token")
       this.router.navigateByUrl("")
     }


  }
