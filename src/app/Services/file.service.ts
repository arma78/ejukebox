import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastService } from '../Services/toast.service';


@Injectable()
export class FileService {

  imageDetailList: AngularFireList<any>;
 

  public basePath = '/imageDetails';
  fileList: any[];
  dataSet: Data = {
    id: '',
    url: '',
    category: '',
    subcategory: '',
    eventDate: ''
  };

  dataSet2: Data2 = {
    id: '',
    url: ''
  };
  imageGalleryDetail: AngularFireList<any> = null;
 

  msg: string = 'error';
  private uid: string;

  constructor(public toastService: ToastService, private storage: AngularFireStorage, private afAuth: AngularFireAuth, @Inject(AngularFireDatabase) private fire: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });


  }

  getImageDetailList() {
    this.imageDetailList = this.fire.list('imageDetails');
  }



  insertImageDetails(id, url, category, subcategory, eventDate) {
    this.dataSet = {
      id: id,
      url: url,
      category: category,
      subcategory: subcategory,
      eventDate: eventDate

    };
    this.imageDetailList.push(this.dataSet).then(() => {
    })
      .catch(error => this.showError(error));
  }
  showError(error) {
    this.toastService.show('Failed to Upload/Delete Image' + error, {
      classname: 'bg-danger text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }



  insertGalleryDetails(id:string, url:string) {
    console.log(id);
    console.log(url);
    this.dataSet2 = {
      id: id,
      url: url,
    };
    this.fire.list('/galleryDetail').push(this.dataSet2).then(() => {
    }).catch(error => this.showError(error));
  }
  showError2(error) {
    this.toastService.show('Failed to Upload' + error, {
      classname: 'bg-danger text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }




  // tslint:disable-next-line:typedef
  getFilteredByCaption(file: any): AngularFireList<GalleryImage[]> {

    return this.fire.list('/imageDetails', ref => ref.orderByChild('id').startAt(file).endAt(file + '\uF7FF'));
  }


  // tslint:disable-next-line:typedef
  deleteFileUpload(fileUpload: GalleryImage) {
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
  id: string;
  url: string;
  category: string;
  subcategory: string;
  eventDate: any;
}

export interface Data2 {
  id: string;
   url: string;
}
