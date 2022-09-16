import { Component, OnInit, OnChanges, ViewChild} from '@angular/core';
import { SongListService } from '../Services/songlist.service';
import { SharedServiceService} from "../Services/shared-service.service";
import { SelectService } from '../Services/select.service';
import {Track,AudioPlayerComponent,NgxAudioPlayerModule} from 'ngx-audio-player';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ejuboxplayer',
  templateUrl: './ejuboxplayer.component.html',
  styleUrls: ['./ejuboxplayer.component.scss'],
  providers: [AudioPlayerComponent],
})
export class EjuboxplayerComponent implements OnInit, OnChanges {
  fileUploads = [];
  currentTime: any;
  message:string;

  constructor(private apc: AudioPlayerComponent,private sharedService:  SharedServiceService, private songlistservice: SongListService, private selectService: SelectService)
  {
  }
  @ViewChild('player', { static: false })

  ngm: NgxAudioPlayerModule
  msaapPlaylist: Track[] = [];


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sharedService.removeTrackerService();
    this.getAllList();

   }
  // tslint:disable-next-line:typedef
  ngOnChanges() {
    console.log('Jupi');

   }






  onEnded(event) {

    var list = "";
       setTimeout(() => {
      list = document.getElementsByTagName("marquee")[0].innerHTML;
             this.sharedService.currentlyplayTracker(list);

    }, 2045);

  }

  // tslint:disable-next-line:typedef
  getAllList() {
      this.songlistservice.getCurrentPlayList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {
      this.fileUploads = fileUploads;
      this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence);
    });
  }




    Test() {



    }





  LoadPlayList() {
    this.msaapPlaylist = [];

    for(var j = this.fileUploads.length -1; j >= 0 ; j--){
      if(this.fileUploads[j].currentplaylist == 'false'){
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
