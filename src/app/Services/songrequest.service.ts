import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { RequestSong } from '../models/requestsong.model';
import {CodeValidator } from '../models/valitator.model';
import {ToastService} from '../Services/toast.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class SongrequestService {


  private uid: string;


  addsongeRequest: AngularFireList<RequestSong> = null;
  addcode: AngularFireList<CodeValidator> = null;
  constructor(public toastService: ToastService, private firebase: AngularFireDatabase) {
    //this.afAuth.authState.subscribe(auth => {
    //  if (auth !== undefined && auth !== null) {
    //    this.uid = auth.uid;
    //  }
    //});
    this.addsongeRequest = firebase.list('/songrequestList');
    this.addcode = firebase.list('/codeValidators');


  }

    // tslint:disable-next-line:typedef
    showError(error) {
      this.toastService.show('Failed to Submit Form' + error, {
        classname: 'bg-danger text-light',
        delay: 5000 ,
        autohide: true,
        headertext: 'Error!!!'
      });
    }

        // tslint:disable-next-line:typedef
        showError2(error) {
          this.toastService.show('Failed to create validation code' + error, {
            classname: 'bg-danger text-light',
            delay: 5000 ,
            autohide: true,
            headertext: 'Error!!!'
          });
        }
    // tslint:disable-next-line:typedef
showSuccess() {
  this.toastService.show('You have successfully sumbitted form!', {
    classname: 'bg-success text-light',
    delay: 3000 ,
    autohide: true,
    headertext: 'Success'
  });
}

showSuccess2() {
  this.toastService.show('You have successfully created validation code!', {
    classname: 'bg-success text-light',
    delay: 3000 ,
    autohide: true,
    headertext: 'Success'
  });
}
  create(requestsonge: RequestSong): any {
    return this.addsongeRequest.push(requestsonge).then(() => {
      this.showSuccess();
    })
    .catch(error =>  this.showError(error));;
  }

  generateCode(codevalidator:CodeValidator): any {
    return this.addcode.push(codevalidator).then(() => {
      this.showSuccess2();
    })
    .catch(error =>  this.showError2(error));
  }

  setCurrentPL(key) {
    this.firebase.list('/songlist').update(key,{currentplaylist:"true" });
   }


  getCodeValidators(): AngularFireList<CodeValidator[]> {

    return this.firebase.list('/codeValidators');
    }

    deleteCodeValidators(ckey:string) {

       this.firebase.database.ref('codeValidators').child(ckey).remove();

      }


         // tslint:disable-next-line:typedef
   getRequestList(): AngularFireList <RequestSong[]> {
    return this.firebase.list('/songrequestList');
  }

}
