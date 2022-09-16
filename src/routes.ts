import { AuthenticationService } from './app/Services/authentication.service';
import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { SongrequestComponent } from './app/songrequest/songrequest.component';
import { ImageDetailComponent } from './app/image/image-detail.component';
import { GallerydetailComponent } from './app/gallerydetail/gallerydetail.component';
import { ValidationcodeComponent } from './app/validationcode/validationcode.component';
import { SongRequestsComponent } from './app/song-requests/song-requests.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { ContactmeComponent } from './app/contactme/contactme.component';
import { EjuboxplayerComponent } from './app/ejuboxplayer/ejuboxplayer.component';
import { AboutmeComponent } from './app/aboutme/aboutme.component';
import { RequestListComponent } from './app/request-list/request-list.component';
import { AuthenticationGuard } from './app/Services/authenticationGuard.service';
import { VideoGalleryComponent } from './app/video-gallery/video-gallery.component';
import { UpdateListSequenceComponent } from './app/update-list-sequence/update-list-sequence.component';
import { UploadSongComponent } from './app/upload-song/upload-song.component';
export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent},
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
  { path: 'request-list', component: RequestListComponent, canActivate: [AuthenticationGuard]},
  { path: 'contactme', component: ContactmeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'songrequest', component: SongrequestComponent },
  { path: 'song-requests', component: SongRequestsComponent },
  { path: 'video-gallery', component: VideoGalleryComponent, canActivate: [AuthenticationGuard]},
  { path: 'ejuboxplayer', component: EjuboxplayerComponent, canActivate: [AuthenticationGuard]},
  { path: 'upload-song', component: UploadSongComponent, canActivate: [AuthenticationGuard]},
  { path: 'validationcode', component: ValidationcodeComponent},
  { path: 'update-list-sequence', component: UpdateListSequenceComponent, canActivate: [AuthenticationGuard]},
  { path: 'image/:id', component: ImageDetailComponent},
  { path: 'gallerydetail/:id', component: GallerydetailComponent},
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

