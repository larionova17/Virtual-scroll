import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {
  transformError(err) {
    switch (err.status) {
      case 404: {
        console.log('Error 404 occurred');
      }
        break;
      case 500: {
        console.log('Error 500 occurred');
      }
    }
  }
}
