import { Component, OnInit } from '@angular/core';
import { RequestSong } from '../models/requestsong.model';
import { SongListService } from '../Services/songlist.service';
import { Router } from '@angular/router';
import { ToastService } from '../Services/toast.service';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AngularFireList } from '@angular/fire/database/database';
import { SongrequestService } from '../Services/songrequest.service';

@Component({
  selector: 'app-songrequest',
  templateUrl: './songrequest.component.html',
  styleUrls: ['./songrequest.component.scss'],
  providers: [SongrequestService]
})
export class SongrequestComponent implements OnInit {
  SonqRequestForm: FormGroup;
  artist: string = '';
  song: string = '';
  key: string = '';

  fileUploads = [];
  public availableSongs: any[] = [];
  requestSongList: AngularFireList<any>;
  charEnter: string;
  codeValid: string = 'false';
  cKey: string = "";
  requestSong: RequestSong = new RequestSong();

  constructor(public toastService: ToastService, private songrequestservice: SongrequestService, private songlistservice: SongListService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.getAllAvailableList();
    this.getAllCodes();
    this.formValidation();

  }

  formValidation() {
    this.SonqRequestForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      SongName: ['', [Validators.required, Validators.minLength(2)]],
      PerformedBy: ['', [Validators.required, Validators.minLength(2)]],
      ValidationCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
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

  CharacterEnter(e: any) {
    this.charEnter = e.target.value;
  }

  getAllAvailableList() {
    this.songlistservice.getAvailableSongsForPlayList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((songsUploaded: any[]) => {
      this.availableSongs = songsUploaded.sort((a, b) => a.id - b.id);
    });
  }
  public AddToCurrentPL(key) {
    this.songrequestservice.setCurrentPL(key);
  }
  update(ev: any) {
    const result: any[] = this.availableSongs.filter((obj) => {
      return obj.key === ev.target.value;
    });
    this.artist = result[0]['artist'];
    this.song = result[0]['id'];
    this.key = result[0]['key'];


    this.SonqRequestForm.get('PerformedBy').setValue(this.artist);
    this.SonqRequestForm.get('SongName').setValue(this.song);

  }


  getAllCodes() {
    // Use snapshotChanges().map() to store the key
    this.songrequestservice.getCodeValidators().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {
      this.fileUploads = fileUploads;
    });

  }




  codeChecker() {
    for (let index2 = 0; index2 < this.fileUploads.length; index2++) {
      if (this.fileUploads[index2].id === this.charEnter) {
        this.cKey = this.fileUploads[index2].key;
        this.showSuccess();
        return this.codeValid = 'true';
      }

    }

  }

  onSubmit() {
    if (this.SonqRequestForm.invalid) {
      alert("Make sure that you have properly populated form!");
      return;
    }
    else {

      this.codeChecker();
      if (this.codeValid === 'true') {
        this.songrequestservice.create(this.requestSong);
        if (this.key !== "") {
          this.AddToCurrentPL(this.key);
        }
        this.songrequestservice.deleteCodeValidators(this.cKey);
        return this.router.navigate(['gallery']);
      }
      else {
        console.log("Something went wrong");
        return this.showError();
      }
    }
  }

}
