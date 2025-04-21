import { Component, inject, OnInit } from '@angular/core';
import { ITransactions } from './model/transactions.interface';
import { DataServiceInterface } from 'src/app/core/modal/data.interface';
import { DATA_SERVICE_TOKEN } from 'src/main';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: ITransactions[]
  private dataService = inject<DataServiceInterface>(DATA_SERVICE_TOKEN);
  ngOnInit(): void {
    this.dataService.fetchData<ITransactions>("transactions").subscribe(transactions => this.transactions = transactions )
  }
}
