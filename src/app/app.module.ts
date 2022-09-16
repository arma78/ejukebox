import { AuthenticationService } from './Services/authentication.service';
import { AuthenticationGuard } from './Services/authenticationGuard.service';
import { ImageService } from './Services/image.service';
import { SongListService } from './Services/songlist.service';
import { FileService } from './Services/file.service';
import { FileSongService } from './Services/fileSong.service';
import { ToastService } from './Services/toast.service';
import { ContactMeService } from './Services/ContactMeService';
import { SongrequestService } from './Services/songrequest.service';
import { SharedServiceService } from "./Services/shared-service.service";
import { SelectService } from './Services/select.service';
import { ServicerequestService } from './Services/servicerequest.service';
import { CustomvalidationService } from './Services/customvalidation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { NgxAudioPlayerModule,AudioPlayerComponent } from 'ngx-audio-player';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { appRoutes } from '../routes';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ToastComponent } from './toast/toast.component';
import { EjuboxplayerComponent } from './ejuboxplayer/ejuboxplayer.component';
import { NbThemeModule, NbLayoutModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { UploadSongComponent } from './upload-song/upload-song.component';
import { UpdateListSequenceComponent } from './update-list-sequence/update-list-sequence.component';
import { SongrequestComponent } from './songrequest/songrequest.component';
import { GallerydetailComponent } from './gallerydetail/gallerydetail.component';
import { ValidationcodeComponent } from './validationcode/validationcode.component';
import { SongRequestsComponent } from './song-requests/song-requests.component';







@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    LoginComponent,
    UploadComponent,
    ContactmeComponent,
    EjuboxplayerComponent,
    AboutmeComponent,
    RequestListComponent,
    ToastComponent,
    VideoGalleryComponent,
    UploadSongComponent,
    UpdateListSequenceComponent,
    SongrequestComponent,
    GallerydetailComponent,
    ValidationcodeComponent,
    SongRequestsComponent,
      

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    DateTimePickerModule,
    NgxAudioPlayerModule,
    HttpModule,
    YouTubePlayerModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,


  ],
  providers: [AuthenticationGuard,
    AuthenticationService,
    SelectService,
    ImageService,
    SongListService,
    FileService,
    FileSongService,
    ContactMeService,
    SharedServiceService,
    ToastService,
    ServicerequestService,
    CustomvalidationService,
    SongrequestService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
