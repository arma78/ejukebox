import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { SongList } from '../models/songlist.model';
import 'firebase/storage';

@Injectable()
export class SongListService {

  constructor(private db: AngularFireDatabase) {

  }



  getImageDetailList(): AngularFireList<SongList[]> {
    return this.db.list('/songlist');
  }

  // tslint:disable-next-line:typedef
  getFilteredImages(cat: any, subcat: any): AngularFireList<SongList[]> {
    return this.db.list('/songlist', ref => ref.orderByChild('category').equalTo(cat).ref.orderByChild('subcategory').equalTo(subcat));
  }

  // tslint:disable-next-line:typedef
  getImage(key: string) {
    return firebase.database().ref('songlist/' + key).once('value')
      .then((snap) => snap.val());
  }

}
