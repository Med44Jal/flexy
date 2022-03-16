import { I } from '@angular/cdk/keycodes';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  title;
  name;
  gsm;
  cin;
  customer;
  action;

  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.action = this.data.action;
    if(this.data.customer){
      this.name = this.data.customer.name;
      this.cin = this.data.customer.cin;
      this.gsm = this.data.customer.gsm;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    let customer = {
      name : this.name,
      cin : this.cin,
      gsm : this.gsm
    }
    this.dialogRef.close(customer);
  }

}
