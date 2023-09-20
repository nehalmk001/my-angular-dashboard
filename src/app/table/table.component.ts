import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'order', 'cost', 'method', 'date', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  order: number;
  cost: string;
  method: string;
  date: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Smith',order: 357689,cost: '$30',method: 'Credit Card',date: '2/4/2023', status: 'Approved'},
  {position: 2, name: 'Emily Johnson',order: 357483,cost: '$40',method: 'Debit Card',date: '1/3/2023', status: 'Pending'},
  {position: 3, name: 'David Martinez',order: 357581,cost: '$20',method: 'Cash On Delivery',date: '23/5/2023', status: 'Approved'},
  {position: 4, name: 'Sarah Anderson',order: 357683,cost: '$70',method: 'Credit Card',date: '3/6/2023', status: 'Rejected'},
  {position: 5, name: 'Michael Chang',order: 352686,cost: '$30',method: 'Online Payment',date: '10/3/2023', status: 'Approved'},
  {position: 6, name: 'Lisa Rodriguez',order: 327683,cost: '$70',method: 'Credit Card',date: '24/5/2023', status: 'pending'},
  {position: 7, name: 'Robert Taylor',order: 317689,cost: '$20',method: 'Debit Card',date: '21/5/2023', status: 'Approved'},
  {position: 8, name: 'Jennifer Lee',order: 257689,cost: '$40',method: 'Cash On Delivery',date: '26/7/2023', status: 'Rejected'},
  {position: 9, name: 'William Davis',order: 457689,cost: '$70',method: 'Cash On Delivery',date: '26/3/2023', status: 'Pending'},
  {position: 10, name: 'Karen Miller',order: 557589,cost: '$70',method: 'Debit Card',date: '28/1/2023', status: 'Rejected'},
  {position: 11, name: 'Jessica Brown',order: 357349,cost: '$20',method: 'Debit Card',date: '2/3/2023', status: 'Approved'},
  {position: 12, name: 'Daniel Harris',order: 357129,cost: '$40',method: 'Credit Card',date: '22/7/2023', status: 'delivered'},
  {position: 13, name: 'Samantha Turner',order: 343289,cost: '$30',method: 'Online Payment',date: '18/7/2023', status: 'Rejected'},
  {position: 14, name: 'Andrew Wilson',order: 357789,cost: '$40',method: 'Online Payment',date: '6/5/2023',status: 'Approved'}
  
];
