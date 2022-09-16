import { Injectable, Inject } from '@angular/core';
import { ArtCategory } from '../artcategory';
import { ArtSubCategory } from '../artSubCategory';
import { SongGenre } from '../songGenre';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  // tslint:disable-next-line:typedef
  getSongGenre() {
    return [
      new SongGenre('Dj List', 'Dj List'),
      new SongGenre('Pop', 'Pop'),
      new SongGenre('Rock', 'Rock'),
      new SongGenre('Classic Rock', 'Classic Rock'),
      new SongGenre('Hard Rock', 'Hard Rock'),
      new SongGenre('Heavy Metal', 'Heavy Metal'),
      new SongGenre('Blues', 'Blues'),
      new SongGenre('Techno', 'Techno'),
      new SongGenre('Jazz', 'Jazz'),
      new SongGenre('Reggae', 'Reggae'),
      new SongGenre('Punk', 'Punk'),
      new SongGenre('Hip Hop', 'Hip Hop'),
      new SongGenre('Funk', 'Funk'),
      new SongGenre('Disco', 'Disco'),
      new SongGenre('Grunge', 'Grunge'),
      new SongGenre('Drum and Bass', 'Drum and Bass'),
    ];
  }
  // tslint:disable-next-line:typedef
  getArtCategory() {
    return [
     new ArtCategory('Dj List', 'Dj List' ),
     new ArtCategory('Dj Night', 'Dj Night' ),
     new ArtCategory('Bend Night', 'Bend Night' ),
     new ArtCategory('Solo Musician Night', 'Solo Musician Night' ),
     new ArtCategory('Stand Up Comedy Night', 'Stand Up Comedy Night' ),
    ];
  }
  // tslint:disable-next-line:typedef
  getArtSubCategory() {
   return [
     new ArtSubCategory('Drum and Base', 'Dj Night', 'Drum and Base' ),
     new ArtSubCategory('Rock', 'Bend Night', 'Rock' ),
     new ArtSubCategory('Guitar', 'Solo Musician Night', 'Guitar'),
     new ArtSubCategory('Solo', 'Stand Up Comedy Night', 'Solo'),
     new ArtSubCategory('Group', 'Stand Up Comedy Night', 'Group'),
    ];
  }

}
