import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { SongList } from '../models/songlist.model';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastService } from '../Services/toast.service';
import { map } from 'rxjs/operators';
import 'firebase/storage';
@Injectable()
export class SongListService {


  private basePath = '/songlist';
  // tslint:disable-next-line:no-inferrable-types
  msg: string = 'error';
  private uid: string;
  // tslint:disable-next-line:max-line-length
  constructor(public toastService: ToastService, private storage: AngularFireStorage, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }
  // tslint:disable-next-line:typedef
  showError(error) {
    this.toastService.show('Failed to delete song' + error, {
      classname: 'bg-danger text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  getImageDetailList(cat: any): AngularFireList<SongList[]> {
    return this.db.list('/songlist', ref => ref.orderByChild('genrecategory').equalTo(cat));
  }

  getCurrentPlayList(): AngularFireList<SongList[]> {
    return this.db.list('/songlist', ref => ref.orderByChild('currentplaylist').equalTo("true"));
  }

  // tslint:disable-next-line:typedef
  getFilteredImages(cat: any): AngularFireList<SongList[]> {
    return this.db.list('/songlist', ref => ref.orderByChild('genrecategory').equalTo(cat));
  }

  // tslint:disable-next-line:typedef
  setCurrentPL(key, currentplaylist) {
   this.db.list('/songlist').update(key, { currentplaylist: currentplaylist });
  }
  // tslint:disable-next-line:typedef
  removeCetCurrentPL(key, currentplaylist) {
    this.db.list('/songlist').update(key, { currentplaylist: currentplaylist });
   }
  setSongSequence(key, sequence) {
    this.db.list('/songlist').update(key, { sequence: sequence.toString() });
   }

  // tslint:disable-next-line:typedef
  deleteFileUpload(fileUpload: SongList) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.url);
        this.showSuccess();
      })
      .catch(error => this.showError(error));
  }



  // tslint:disable-next-line:typedef
  showSuccess() {
    this.toastService.show('You have successfully deleted song from database!', {
      classname: 'bg-success text-light',
      delay: 3000,
      autohide: true,
      headertext: 'Song Deletion'
    });
  }

  // tslint:disable-next-line:typedef
  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/${key}`).remove();
  }
  // tslint:disable-next-line:typedef
  private deleteFileStorage(downloadUrl: string) {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }

  // tslint:disable-next-line:typedef
  getImage(key: string) {
    return firebase.database().ref('songlist/' + key).once('value')
      .then((snap) => snap.val());
  }

}
