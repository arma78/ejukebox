import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { SongListService } from '../Services/songlist.service';
@Component({
  selector: 'app-ejuboxplayer',
  templateUrl: './ejuboxplayer.component.html',
  styleUrls: ['./ejuboxplayer.component.scss']
})
export class EjuboxplayerComponent implements OnInit {
  fileUploads = [];
  constructor(private songlistservice: SongListService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    this.getAllList();
  }

  msaapPlaylist: Track[] = [];
  // tslint:disable-next-line:typedef
  getAllList() {
    // Use snapshotChanges().map() to store the key
    this.songlistservice.getImageDetailList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {

      this.fileUploads = fileUploads;
      for (var i = 0; i < this.fileUploads.length; i++) {
        this.msaapPlaylist.push({
          title: this.fileUploads[i].id,
          link: this.fileUploads[i].url,
          artist: this.fileUploads[i].artist,
        });
        console.log(this.fileUploads[i].url);
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
