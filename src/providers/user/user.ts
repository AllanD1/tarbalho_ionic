import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

itemsRef: AngularFireList<any>;

  constructor(protected db: AngularFireDatabase) {
    console.log('Hello UserProvider Provider');
  }

  insert(obj){
  	this.itemsRef.push(obj);
  }

}
