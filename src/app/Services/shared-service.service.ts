import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { BehaviorSubject, Observable } from 'rxjs';
import { Tracker } from '../models/tracker.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Data } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class SharedServiceService {
  imageDetailList: AngularFireList<any>;
  private uid: string;
  trackerMsg: AngularFireList<any>;
  x: any;
  SongPlayed:string;
  dataSet: Data = {SongPlayed: ''};
  constructor(public afAuth: AngularFireAuth, @Inject(AngularFireDatabase) private fire: AngularFireDatabase) {
  // this.afAuth.authState.subscribe(auth => {
  //     console.log(auth);
   //   if (auth !== undefined && auth !== null) {
  //      this.uid = auth.uid;
  //    }
  //  });
    
   }

   removeTrackerService()
   {
    this.fire.list('/MessageTracker').remove();
   }
  

   currentlyplayTracker(titleTracker:string) 
    {
    this.dataSet = {
      SongPlayed: titleTracker,
    };
     this.imageDetailList = this.fire.list('/MessageTracker');
     this.imageDetailList.push(this.dataSet);
     this.nextMessage();
    }
  
    getSongTracker()
    {
      this.trackerMsg = this.fire.list('/MessageTracker', ref => ref.limitToLast(1));
      return this.trackerMsg;
     }


  nextMessage() {
    var x = "";
    this.x = this.getSongTracker().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.x = data[0].SongPlayed;
    });
  }
  
}