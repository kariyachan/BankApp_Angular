import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const  options={            //sep30 1:12:54 
    withCredential:true,
    headers:new HttpHeaders()
  }


@Injectable({
  providedIn: 'root'
})




export class DataService {

  // currentUser=""
  // accountNum=""
 

  // user:any={
  //   1000:{uname:"Abijith",acno:1000,password:"userone",balance:5000,transactions:[]}, //transactions empty array
  //   1001:{uname:"neer",acno:1001,password:"usertwo",balance:5000,transactions:[]},
  //   1002:{uname:"Laisha",acno:1002,password:"userthree",balance:5000,transactions:[]},
  // }

  constructor(private router:Router , private http:HttpClient) {
      // this.getDetails()
   }

  // saveDetails(){
  //   if(this.user)
  //   {
  //     localStorage.setItem("user",JSON.stringify(this.user))
  //   }
  //   if(this.currentUser)
  //   {
  //     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  //   }
  //   if(this.accountNum)
  //   {
  //     localStorage.setItem("accountNum",JSON.stringify(this.accountNum))
  //   }
  // }

  // getDetails(){
  //   if(localStorage.getItem("user")){
  //     this.user=JSON.parse(localStorage.getItem("user") || '') //sep 15 1:33:51
  //   }
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '') //sep 15 1:33:51
  //   }
    
  // }

  getTransaction(acno:any){
    const data={
      acno
    }
    return this.http.post("http://localhost:3000/transaction" ,data,this.getOptions())
  }




  register(acno:any,uname:any,password:any){
    const data={
      acno,
      uname,
      password
    }
    return this.http.post("http://localhost:3000/register" ,data)
    // let accDetails=this.user
    // if(acno in accDetails){
    //     return false
    // }
    // else{
    //   accDetails[acno]={
    //     uname,
    //     acno,
    //     password,
    //     balance:0, 
    //     transactions:[]
    //   }
    //   console.log(this.user)
    //   this. saveDetails()
    //   return true
    // }
  }

  
  login(acno:any,password:any){
    const data={
      acno,
      password
    }
    return this.http.post("http://localhost:3000/login",data,options)
    // let accountDetails=this.user
    // if(acno in accountDetails){
    //   if(password==accountDetails[acno]["password"])
    //   {
    //     this.currentUser=accountDetails[acno]["uname"]
    //     this.accountNum=acno
    //     this. saveDetails()
    //     return true
    //   }
    //   else{
    //     alert("Invalid Password")
    //     return false
    //   }
    // }
    // else
    // {
    //   alert("Invalid Account Number")
    //   return false
    // }
  }
  getOptions(){
    const token=localStorage.getItem("token")
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }


  deposit(acno:any,password:any,amount:any){
    const data={
      acno,
      password,
      amount
    }
    return this.http.post("http://localhost:3000/deposit",data,this.getOptions())
   
   
    // var amt=parseInt(amount)   //converting string into integer
    // var accountDetails=this.user
    // if(acno in accountDetails){
    //   if(pswd==accountDetails[acno]["password"])
    //   {
    //     accountDetails[acno]["balance"]+=amt
    //     accountDetails[acno]["transactions"].push({
    //       amount:amt,
    //       type:"Credit"
    //     })
        
    //     this. saveDetails()
    //     console.log(accountDetails)
    //     return accountDetails[acno]["balance"]
    //   }
    //   else{
    //     alert("Invalid Password")
    //     return false
    //   }
    // }
    // else
    // {
    //   alert("Invalid Account Number")
    //   return false
    // }

  }

  deleteAcc(acno:any){

    return this.http.delete("http://localhost:3000/deleteAcc/"+acno,this.getOptions())

  }



  withdraw(acno:any,password:any,amount:any){
    const data={
      acno,
      password,
      amount
    }
    return this.http.post("http://localhost:3000/withdraw",data,this.getOptions())


  //   var amt=parseInt(wamount)
  //   var accountDetails=this.user
  //   if(wacno in accountDetails){
  //     if(wpswd==accountDetails[wacno]["password"])
  //     {
  //       if(accountDetails[wacno]["balance"]>=amt){
  //         accountDetails[wacno]["balance"]-=amt

  //         accountDetails[wacno]["transactions"].push({
  //           amount:amt,
  //           type:"Debit"
  //         })
  //         this. saveDetails()
  //         console.log(accountDetails)
  //         return accountDetails[wacno]["balance"]
  //       }else{
  //         alert("Insufficient balance "+accountDetails[wacno]["balance"])
  //         return false
  //       }
  //     }
  //     else{
  //       alert("Invalid Password")
  //       return false
  //     }
  //   }
  //   else
  //   {
  //     alert("Invalid Account Number")
  //     return false
  //   }
   }

}
