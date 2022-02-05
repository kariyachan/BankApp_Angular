import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions:any
  acno:any

  constructor(private ds:DataService) {

    this.acno=JSON.parse(localStorage.getItem("currentAcc") || '')
    this.ds. getTransaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        this.transactions=result.transaction
      }
    },
    (result)=>{
      alert(result.error.message)
    })
   }

  ngOnInit(): void {
  }

}
