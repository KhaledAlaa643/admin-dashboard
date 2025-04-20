import { Component, OnInit } from '@angular/core';
import { IOrder } from './models/order.interface';
import { DataService } from 'src/app/core/services/data.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports: [NgxPaginationModule]
})
export class OrdersComponent implements OnInit {
  orders: IOrder[]
  p: number = 1;

  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.fetchData<IOrder>("orders").subscribe(orders => this.orders = orders )
  }

}
