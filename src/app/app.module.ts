import { AuthenticationService } from './Services/authentication.service';
import { AuthenticationGuard } from './Services/authenticationGuard.service';
import { ImageService } from './Services/image.service';
import { SongListService } from './Services/songlist.service';
import { FileService } from './Services/file.service';
import { FileSongService } from './Services/fileSong.service';
import { ToastService } from './Services/toast.service';
import { ContactMeService } from './Services/ContactMeService';
import { SelectService } from './Services/select.service';
import { ServicerequestService } from './Services/servicerequest.service';
import { CustomvalidationService } from './Services/customvalidation.service';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
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
import { NavbarComponent } from './navbar/navbar.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { NgxAudioPlayerModule } from 'ngx-audio-player';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { UploadSongComponent } from './upload-song/upload-song.component';






@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
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
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpModule,
    YouTubePlayerModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    NgbModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule

  ],
  providers: [AuthenticationGuard,
    AuthenticationService,
    SelectService,
    ImageService,
    SongListService,
    FileService,
    FileSongService,
    ContactMeService,
    ToastService,
    ServicerequestService,
    CustomvalidationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
