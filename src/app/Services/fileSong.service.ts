import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { SongList } from '../models/songlist.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastService } from '../Services/toast.service';
import { map } from 'rxjs/operators';

@Injectable()
export class FileSongService {

  imageDetailList: AngularFireList<any>;
  private basePath = '/songlist';
  fileList: any[];
  dataSet: Data = {id: '', url: '', genrecategory: '', tonality: '', artist:''};



  // tslint:disable-next-line:no-inferrable-types
  msg: string = 'error';
  private uid: string;
  // tslint:disable-next-line:max-line-length
  constructor(public toastService: ToastService, private storage: AngularFireStorage, private afAuth: AngularFireAuth, @Inject(AngularFireDatabase) private fire: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  // tslint:disable-next-line:typedef
  getImageDetailList() {
    this.imageDetailList = this.fire.list('songlist');
  }

  insertImageDetails(id, url, genrecategory, tonality, artist) {
    this.dataSet = {
      // tslint:disable-next-line:object-literal-shorthand
      id: id,
      // tslint:disable-next-line:object-literal-shorthand
      url: url,
      // tslint:disable-next-line:object-literal-shorthand
      genrecategory: genrecategory,
      // tslint:disable-next-line:object-literal-shorthand
      tonality: tonality,
      // tslint:disable-next-line:object-literal-shorthand
      artist: artist

    };
    // tslint:disable-next-line:only-arrow-functions
    this.imageDetailList.push(this.dataSet).then(() => {
    })
      .catch(error => this.showError(error));
  }

  // tslint:disable-next-line:typedef
  showError(error) {
    this.toastService.show('Failed to Upload/Delete Image' + error, {
      classname: 'bg-danger text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }
  // tslint:disable-next-line:typedef
  getFilteredByCaption(file: any): AngularFireList<SongList[]> {

    return this.fire.list('/songlist', ref => ref.orderByChild('id').startAt(file).endAt(file + '\uF7FF'));
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
    this.toastService.show('You have successfully deleted image from database!', {
      classname: 'bg-success text-light',
      delay: 3000,
      autohide: true,
      headertext: 'Image Deletion'
    });
  }

  // tslint:disable-next-line:typedef
  private deleteFileDatabase(key: string) {
    return this.fire.list(`${this.basePath}/${key}`).remove();
  }
  // tslint:disable-next-line:typedef
  private deleteFileStorage(downloadUrl: string) {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }


}

export interface Data {
  // tslint:disable-next-line:no-inferrable-types
  id: string;
  // tslint:disable-next-line:no-inferrable-types
  url: string;
  // tslint:disable-next-line:no-inferrable-types
  genrecategory: string;
  // tslint:disable-next-line:no-inferrable-types
  tonality: string;
  // tslint:disable-next-line:no-inferrable-types
  artist: string;
}
