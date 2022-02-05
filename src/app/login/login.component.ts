import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // aim="your perfect banking partner  ---string interpolation"

  username=""
  acno=""
  pswd=""
  toggle=true


  loginForm=this.fb.group({
    acno:['',[Validators.required]],
    pwd:['',[Validators.required]]
  })

  constructor(private router : Router, private ds : DataService , private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  accChange(event:any){
    this.acno=event.target.value
  }
  pswdChange(event:any){
    this.pswd=event.target.value
  }

  login(){
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pwd
    if(this.loginForm.valid) 
    {
      this.ds.login(acno,pswd)
      .subscribe((result:any)=>{
        if(result)
        {
          localStorage.setItem("token",result.token)
          localStorage.setItem("currentUser",result.currentUser)
          localStorage.setItem("currentAcc",acno)
          alert(result.message)
          this.router.navigateByUrl("home-page")
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
}
    
//     if(acno in accDetails)
//     {
//       if(pswd==accDetails[acno]["password"])
//       {
//         alert("Login Success....")
//         this.router.navigateByUrl("home-page") 
//       }
//       else{
//         alert("Invalid PassWord...")
//       }
//     }
//     else{
//       alert("Invalid Account Number....")

