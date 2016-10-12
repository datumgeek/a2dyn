import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  public session = {
    views: [
      {
        module: 'http://localhost:9000/views/customer/customer.module.js',
        view: 'customerList.component',
        model: {
          title: 'customer list'
        }
      },
      {
        module: 'http://localhost:9000/views/customer/customer.module',
        view: 'customerDetail.component',
        model: {
          title: 'customer detail',
          customerId: 1
        }
      }
    ]
  }

}
