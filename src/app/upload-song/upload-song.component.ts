
import * as _ from 'lodash';
import { Component, Inject, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { FileSongService } from '../Services/fileSong.service';
import { SongGenre } from '../songGenre';
import { SelectService } from '../Services/select.service';
import { SongListService } from '../Services/songlist.service';
import { ToastService } from '../Services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.scss']
})
export class UploadSongComponent implements OnInit, OnChanges {
  SaveDisabled: boolean = false;
  uploadProgress$: Observable<number>;
  task: AngularFireUploadTask;
  selectedCategory: SongGenre = new SongGenre('', '');
  selectSubVal: any;
  genrecat: SongGenre[];
  selectedImage: any;
  url: string;
  id: string;
  file: string;
  genrecategory: string;
  artist: string;
  sequence: string;
  fileUploads: any[];
  constructor(public toastService: ToastService,
    private selectService: SelectService,
    @Inject(AngularFireStorage) private storage: AngularFireStorage,
    @Inject(FileSongService) private filesongService: FileSongService,
    private songService: SongListService) { }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
  ngOnInit() {
    this.genrecat = this.selectService.getSongGenre();
    console.log(this.genrecat);
    this.filesongService.getImageDetailList();
    this.selectedImage = null;
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    // Use snapshotChanges().map() to store the key
    this.filesongService.getFilteredByCaption(this.file).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
  // tslint:disable-next-line:typedef
  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  // tslint:disable-next-line:typedef
  showStandard() {
    this.toastService.show('I am a standard toast', {
      delay: 2000,
      autohide: true
    });
  }

  // tslint:disable-next-line:typedef
  showSuccess() {
    this.toastService.show('You have successfully added song to database!', {
      classname: 'bg-success text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Song Upload'
    });
  }
  // tslint:disable-next-line:typedef
  showError() {
    this.toastService.show('Check Required Fields', {
      classname: 'bg-danger text-light',
      delay: 3000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }
  // tslint:disable-next-line:typedef
  save() {


    if (this.selectedImage === null ||
      this.id === 'undefined' ||
      this.selectSubVal === ''
    ) {
      return this.showError();
    }



    // tslint:disable-next-line:prefer-const
    let name = this.selectedImage.name;
    this.SaveDisabled = true;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, this.selectedImage);
    this.uploadProgress$ = task.percentageChanges();
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.genrecategory = this.selectedCategory.id.toString();
          this.filesongService.insertImageDetails(this.id, this.url, this.genrecategory, this.sequence,this.artist);
          this.showSuccess();
        });
      })
    ).subscribe();
    this.SaveDisabled = false;

  }

  // tslint:disable-next-line:typedef
  deleteFileUpload(fileUploads) {
    this.filesongService.deleteFileUpload(fileUploads);
  }

}
