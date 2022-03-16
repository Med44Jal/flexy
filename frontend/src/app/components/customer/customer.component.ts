import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';

export interface PeriodicElement {
  id: number;
  name: string;
  cin: string;
  gsm: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Deep Javiya', cin: 'K56743', gsm: '0651524222'},
  { id: 2, name: 'Deep Javiya', cin: 'K56743', gsm: '0651524222'},
  { id: 3, name: 'Deep Javiya', cin: 'K56743', gsm: '0651524222'},
  { id: 4, name: 'Deep Javiya', cin: 'K56743', gsm: '0651524222'}
];


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['id', 'name', 'cin', 'gsm', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  constructor(private dialog: MatDialog) { }

  getProperty = (obj, path) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

  ngOnInit() {
    this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getCustomers();
  }

  getCustomers(){
    this.dataSource.data = ELEMENT_DATA;
  }

  createNewCustomer(){
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '400px',
      data: { title:  "New customer" }
    });

    dialogRef.afterClosed().subscribe(c => {
      if(c){
        this.dataSource.data.push(c);
        this.getCustomers();
      }
    });
  }

  updateCustomer(c){
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '400px',
      data: { title:  "Edit customer: " + c.name, customer: c }
    });

    dialogRef.afterClosed().subscribe(c => {
      this.getCustomers();
    });
  }

  deleteCustomer(c){
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '400px',
      data: { title:  "Delete customer: " + c.name, customer: c, action: 'delete' }
    });

    dialogRef.afterClosed().subscribe(c => {
      this.getCustomers();
    });
  }

}
