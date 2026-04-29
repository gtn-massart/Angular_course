import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(text: any) {
    console.log('My LOGGER : ', text);
  }
}
