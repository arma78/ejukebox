import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {GalleryImage } from '../models/galleryImage.model';
import 'firebase/storage';
import { now } from 'lodash';

@Injectable()
export class ImageService {

   constructor(private db: AngularFireDatabase) {

   }



   getImageDetailList(): AngularFireList<GalleryImage[]> {

    return this.db.list('/imageDetails');
    }
    getLastEvent(): AngularFireList<GalleryImage[]> {
      return this.db.list('/imageDetails', ref => ref.limitToLast(1));
    }

  // tslint:disable-next-line:typedef
   getFilteredImages(cat: any, subcat: any): AngularFireList <GalleryImage[]> {
   return this.db.list('/imageDetails', ref => ref.orderByChild('category').equalTo(cat).ref.orderByChild('subcategory').equalTo(subcat));
  }

    // tslint:disable-next-line:typedef
    getGalleryDetail(key:string): AngularFireList <GalleryImage[]> {
      return this.db.list('/galleryDetail', ref => ref.orderByChild('id').equalTo(key));
     }

  // tslint:disable-next-line:typedef
  getImage(key: string) {
    return firebase.database().ref('imageDetails/' + key).once('value')
    .then((snap) => snap.val());
  }

}
