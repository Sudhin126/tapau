import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
packk=[];
  constructor(private transactionService: TransactionService) { }
  
  ngOnInit(): void {
    this.reloadData();
  
  }
  reloadData() {
    debugger;
    this.transactionService.getList().subscribe((data)=>{
      debugger;
      this.packk = data["data"];
    
    });
}
}
