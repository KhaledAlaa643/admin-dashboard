import { Component, inject, OnInit } from '@angular/core';
import { IOrder } from './models/order.interface';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataServiceInterface } from 'src/app/core/modal/data.interface';
import { DATA_SERVICE_TOKEN } from 'src/main';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports: [NgxPaginationModule]
})
export class OrdersComponent implements OnInit {
  orders: IOrder[]
  p: number = 1;

  private dataService = inject<DataServiceInterface>(DATA_SERVICE_TOKEN);
  ngOnInit(): void {
    this.dataService.fetchData<IOrder>("orders").subscribe(orders => this.orders = orders )
  }

}
