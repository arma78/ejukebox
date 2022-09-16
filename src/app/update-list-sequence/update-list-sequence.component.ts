import { Component, OnInit, OnChanges } from '@angular/core';
import { SongListService } from '../Services/songlist.service';
import { SongGenre } from '../songGenre';
import { SelectService } from '../Services/select.service';

@Component({
  selector: 'app-update-list-sequence',
  templateUrl: './update-list-sequence.component.html',
  styleUrls: ['./update-list-sequence.component.scss']
})
export class UpdateListSequenceComponent implements OnInit, OnChanges {
  fileUploads = [];
  selectedCategory: SongGenre = new SongGenre('Pop', 'Pop');
  genrecat: SongGenre[];
  page = 1;
  pageSize = 9;
  constructor(private songlistservice: SongListService, private selectService: SelectService) { }
  ngOnInit() {
    this.genrecat = this.selectService.getSongGenre();
    this.onSelect(this.selectedCategory.id);
    this.getAllList();
  }
  // tslint:disable-next-line:typedef
  ngOnChanges() {
    this.onSelect(this.selectedCategory.id);
  }

  public open(event, key) {
    this.songlistservice.setSongSequence(key, event.target.value);
  }
  public AddToCurrentPL(event, key) {
    this.songlistservice.setCurrentPL(key, 'true');
  }
  public RemoveFromCurrentPL(event, key) {
    this.songlistservice.removeCetCurrentPL(key, 'false');
  }

  // tslint:disable-next-line:typedef
  onSelect(Categoryid) {

    this.selectedCategory = new SongGenre(Categoryid, Categoryid);
    this.getFilteredList();
  }

  // tslint:disable-next-line:typedef
  deleteFileUpload(fileUploads) {
    this.songlistservice.deleteFileUpload(fileUploads);
  }
  // tslint:disable-next-line:typedef
  getAllList() {
    this.songlistservice.getImageDetailList(this.selectedCategory.id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {
      this.fileUploads = fileUploads;
      this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence); 
    });
  }

  // tslint:disable-next-line:typedef
  getFilteredList() {
    this.songlistservice.getFilteredImages(this.selectedCategory.id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {

      this.fileUploads = fileUploads;
      this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence); 
    });
  }
}
