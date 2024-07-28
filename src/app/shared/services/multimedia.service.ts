import { EventEmitter, Injectable } from '@angular/core';
// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }
}
