import { Component, OnInit, OnChanges} from '@angular/core';
import { Track } from 'ngx-audio-player';
import { SongListService } from '../Services/songlist.service';
import { SongGenre } from '../songGenre';
import { SelectService } from '../Services/select.service';
@Component({
  selector: 'app-ejuboxplayer',
  templateUrl: './ejuboxplayer.component.html',
  styleUrls: ['./ejuboxplayer.component.scss']
})
export class EjuboxplayerComponent implements OnInit, OnChanges {
  fileUploads = [];
  selectedCategory: SongGenre = new SongGenre('Pop', 'Pop');
  genrecat: SongGenre[];
  constructor(private songlistservice: SongListService, private selectService: SelectService) { }
  msaapPlaylist: Track[] = [];
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.genrecat = this.selectService.getSongGenre();
    this.onSelect(this.selectedCategory.id);
    this.getAllList();
  }
  // tslint:disable-next-line:typedef
  ngOnChanges() {
    this.onSelect(this.selectedCategory.id);
  }


  // tslint:disable-next-line:typedef
  onSelect(Categoryid) {
    
    this.selectedCategory = new SongGenre(Categoryid, Categoryid);
    this.getFilteredList();
  }


  // tslint:disable-next-line:typedef
  getAllList() {
    this.songlistservice.getImageDetailList(this.selectedCategory.id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {

      this.fileUploads = fileUploads;
      for (var i = 0; i < this.fileUploads.length; i++) {
        this.msaapPlaylist.push({
          title: this.fileUploads[i].id,
          link: this.fileUploads[i].url,
          artist: this.fileUploads[i].artist,
        });
      }
    });
  }

  // tslint:disable-next-line:typedef
  getFilteredList() {
    this.songlistservice.getFilteredImages(this.selectedCategory.id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {

      this.fileUploads = fileUploads;
      this.msaapPlaylist = [];
      for (var i = 0; i < this.fileUploads.length; i++) {
        this.msaapPlaylist.push({
          title: this.fileUploads[i].id,
          link: this.fileUploads[i].url,
          artist: this.fileUploads[i].artist,
        });
      }
    });
  }



  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;

  
  


}
