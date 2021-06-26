import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { SongList } from '../models/songlist.model';
import 'firebase/storage';

@Injectable()
export class SongListService {

  constructor(private db: AngularFireDatabase) {

  }



  getImageDetailList(cat: any): AngularFireList<SongList[]> {
    return this.db.list('/songlist', ref => ref.orderByChild('genrecategory').equalTo(cat));
  }

  // tslint:disable-next-line:typedef
  getFilteredImages(cat: any): AngularFireList<SongList[]> {
    console.log("heya");
    return this.db.list('/songlist', ref => ref.orderByChild('genrecategory').equalTo(cat));
  }


 

  // tslint:disable-next-line:typedef
  getImage(key: string) {
    return firebase.database().ref('songlist/' + key).once('value')
      .then((snap) => snap.val());
  }

}
