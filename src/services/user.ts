import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
 private _nc: string;
 private _pin: number;
 constructor() {
 this._nc = '14401043 ';
 this._pin = 2406;
 }
 get nc() {
 return this._nc;
 }
 set nc(newVal) {
 console.log('Set name = ' + newVal);
 this._nc = newVal;
 }
 get pin() {
 return this._pin;
 }
 set pin(newVal) {
 console.log('Set pin = ' + newVal);
 this._pin = newVal;
 }
}