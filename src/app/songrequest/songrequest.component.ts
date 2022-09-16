import { Component, OnInit } from '@angular/core';
import { RequestSong } from '../models/requestsong.model';
import { NgForm, NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../Services/toast.service';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AngularFireList } from '@angular/fire/database/database';
import {SongrequestService } from '../Services/songrequest.service';

@Component({
  selector: 'app-songrequest',
  templateUrl: './songrequest.component.html',
  styleUrls: ['./songrequest.component.scss'],
  providers: [SongrequestService]
})
export class SongrequestComponent implements OnInit {
  fileUploads = [];
  public SonqRequestForm: FormGroup;
  submitted = false;
  requestSongList: AngularFireList<any>;
  charEnter:string;
  codeValid:string = 'false';
  cKey:string = "";
  requestSong: RequestSong = new RequestSong();

  constructor(public toastService: ToastService, private songrequestservice:SongrequestService, private router: Router, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this. getAllCodes();
    this.SonqRequestForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      SongName: ['', [Validators.required, Validators.minLength(2)]],
      PerformedBy: ['', [Validators.required, Validators.minLength(2)]],
      ValidationCode:  ['', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]],
    }
    );
  }

  showSuccess() {
    this.toastService.show('Your validation code is correct!', {
      classname: 'bg-success text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Code is correct!'
    });
  }
  // tslint:disable-next-line:typedef
  showError() {
    this.toastService.show('Your validation code is not correct!', {
      classname: 'bg-danger text-light',
      delay: 3000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  get Name() {
    return this.SonqRequestForm.get('Name');
  }
  get SongName() {
    return this.SonqRequestForm.get('SongName');
  }
  get PerformedBy() {
    return this.SonqRequestForm.get('PerformedBy');
  }
  get ValidationCode() {
    return this.SonqRequestForm.get('ValidationCode');
  }

  CharacterEnter(e:any)
  {
    this.charEnter = e.target.value;
  }
  getAllCodes() {
    // Use snapshotChanges().map() to store the key
    this.songrequestservice.getCodeValidators().snapshotChanges().map(changes => {
     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
   }).subscribe((fileUploads: any) => {

     this.fileUploads = fileUploads;
   });
 }




  codeChecker()
    {
      for (let index2 = 0; index2 < this.fileUploads.length; index2++) {
        if ( this.fileUploads[index2].id === this.charEnter)
        {
        this.cKey = this.fileUploads[index2].key;
        this.showSuccess();
        return this.codeValid = 'true';
        }
  
       }

    }
  
  onSubmit() {

    this.codeChecker();
    if (this.codeValid === 'true')
    {
    this.songrequestservice.create(this.requestSong);
    this.songrequestservice.deleteCodeValidators(this.cKey);
    this.router.navigate(['gallery']);
    this.submitted = true;
    }
    else {
    this.showError();
    }
  }

}
