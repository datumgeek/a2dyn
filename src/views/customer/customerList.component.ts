import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-list',
  template: `
    <p>customer-list !!!</p>
    <p>message: {{dynState?.message}}</p>
    `,
  styleUrls: []
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  dynState: any;

  getDynState() {
    return this.dynState;
  }
  setDynState(value) {
    this.dynState = value;
  }

  ngOnInit() {
  }

}
