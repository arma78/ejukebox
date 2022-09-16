import { Component, OnInit } from '@angular/core';
import { SongrequestService } from '../Services/songrequest.service';

@Component({
  selector: 'app-song-requests',
  templateUrl: './song-requests.component.html',
  styleUrls: ['./song-requests.component.scss']
})
export class SongRequestsComponent implements OnInit {
  serReq: any[];
  constructor(private serRequest: SongrequestService) { }

  ngOnInit(): void {
    this.serRequest.getRequestList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(serReqList => {
      this.serReq = serReqList;
    });
  }

}
