import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  public session = {
    views: [
      {
        module: 'views/customer/customer.module',
        view: 'CustomerListComponent',
        model: {
          title: 'customer list',
          message: 'this is very, very cool :)'
        }
      },
      {
        module: 'views/customer/customer.module',
        view: 'CustomerDetailComponent',
        model: {
          title: 'customer detail',
          customerId: 1
        }
      },
      {
        module: 'views/customer/customer.module',
        view: 'CustomerListComponent',
        model: {
          title: 'customer list',
          message: 'another one, but with a different message !! :)'
        }
      }
    ]
  }

}
