import { Component, OnInit } from '@angular/core';
import { ITransactions } from './model/transactions.interface';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: ITransactions[]
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.fetchData<ITransactions>("transactions").subscribe(transactions => this.transactions = transactions )
  }
}
