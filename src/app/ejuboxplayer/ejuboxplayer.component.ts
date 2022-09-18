import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { SongListService } from '../Services/songlist.service';
import { SharedServiceService } from "../Services/shared-service.service";
import { SelectService } from '../Services/select.service';
import { Track, AudioPlayerComponent, NgxAudioPlayerModule } from 'ngx-audio-player';

@Component({
  selector: 'app-ejuboxplayer',
  templateUrl: './ejuboxplayer.component.html',
  styleUrls: ['./ejuboxplayer.component.scss'],
  providers: [AudioPlayerComponent],
})
export class EjuboxplayerComponent implements OnInit, OnChanges {
  fileUploads = [];
  currentTime: any;
  message: string;

  constructor(private apc: AudioPlayerComponent, private sharedService: SharedServiceService, private songlistservice: SongListService, private selectService: SelectService) {
  }
  @ViewChild('player', { static: false })
  ngm: NgxAudioPlayerModule
  msaapPlaylist: Track[] = [];
  ngOnInit() {
    this.sharedService.removeTrackerService();
    this.getAllList();
  }
  // tslint:disable-next-line:typedef
  ngOnChanges() {
  }
  onEnded(event) {
    this.RequestedSongs();
    var list = "";
    setTimeout(() => {
      list = document.getElementsByTagName("marquee")[0].innerHTML;
      this.sharedService.currentlyplayTracker(list);

    }, 2045);

  }
  getAllList() {
    this.songlistservice.getCurrentPlayList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {
      this.fileUploads = fileUploads;
      this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence);
    });
  }
  RequestedSongs() {
    const diff1: Track[] = this.fileUploads.filter(item => this.msaapPlaylist.indexOf(item) < 0);
    const diff2: Track[] = this.msaapPlaylist.filter(item => this.fileUploads.indexOf(item) < 0);
    const diff = diff1.length - diff2.length;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        this.msaapPlaylist.push({
          title: this.fileUploads[i].id,
          link: this.fileUploads[i].url,
          artist: this.fileUploads[i].artist,
        });
      }
    }
  }
  LoadPlayList() {
    this.msaapPlaylist = [];
    for (var j = this.fileUploads.length - 1; j >= 0; j--) {
      if (this.fileUploads[j].currentplaylist == 'false') {
        this.fileUploads.splice(j, 1);
      }
    }
    for (var i = 0; i < this.fileUploads.length; i++) {
      this.msaapPlaylist.push({
        title: this.fileUploads[i].id,
        link: this.fileUploads[i].url,
        artist: this.fileUploads[i].artist,
      });
    }
  }
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [6, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;



}
