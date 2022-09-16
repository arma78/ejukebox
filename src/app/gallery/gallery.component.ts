import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../Services/image.service';

import { ArtCategory } from '../artcategory';
import { ArtSubCategory } from '../artSubCategory';
import { SelectService } from '../Services/select.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnChanges {
  selectedCategory: ArtCategory = new ArtCategory('Dj Night', 'Dj Night');
  selectSubVal: any;
  artcat: ArtCategory[];
  artsubcat: ArtSubCategory[];
  category: string;
  subcategory: string;
  fileUploads = [];
  page = 1;
  pageSize = 9;
  constructor(private selectService: SelectService, public imageService: ImageService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {

      this.artcat = this.selectService.getArtCategory();
      this.onSelect(this.selectedCategory.id);
      this.selectSubVal = '';
      this.getAllList();

    }

    // tslint:disable-next-line:typedef
    ngOnChanges()
    {
       // Use snapshotChanges().map() to store the key
       this.imageService.getFilteredImages(this.selectedCategory.id.toString(), this.selectSubVal).snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }).subscribe((fileUploads:any) => {
        this.fileUploads = fileUploads.sort((a, b) => (a.eventDate < b.eventDate) ? 1 : -1);
      });
    }

    // tslint:disable-next-line:typedef
    onSelect(subCategoryid) {
      this.artsubcat = this.selectService.getArtSubCategory().filter((item) => item.subCategoryid == subCategoryid);
    }


    // tslint:disable-next-line:typedef
    getAllList() {
       // Use snapshotChanges().map() to store the key
       this.imageService.getImageDetailList().snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }).subscribe((fileUploads: any) => {

        this.fileUploads = fileUploads.sort((a, b) => (a.eventDate < b.eventDate) ? 1 : -1);

      });
    }


  }
