
import { ImageService } from "../app/Services/image.service";
import { SharedServiceService } from "../app/Services/shared-service.service";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from './Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collapse = true;
  user: Observable<firebase.User>;
  message: string;
  title = 'Night Club - Good Life';
  fileUploads = [];

  EventNameandDate: string;
  eventDT:Date;
  constructor(public sharedService: SharedServiceService, public imageService: ImageService,private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.getLastEvent();
    this.getCurrentSong();
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
     }

  getCurrentSong()
  {
    this.sharedService.getSongTracker().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((message: any) => {
      if (message.length == 0) {
        this.message = '';
      }
      else {
        this.message = 'Currently Playing: ' + message[0].SongPlayed;
      }
    });
  }

  getLastEvent() {
    this.imageService.getLastEvent().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((fileUploads: any) => {
      this.fileUploads = fileUploads;
      this.eventDT = this.fileUploads[0].eventDate;
      this.EventNameandDate = 'Next Event: ' +  this.fileUploads[0].id.substring(0,60) + '...  ' + this.fileUploads[0].category + " - " + this.fileUploads[0].subcategory;
    });
  }

}
