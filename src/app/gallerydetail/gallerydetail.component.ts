import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-gallerydetail',
  templateUrl: './gallerydetail.component.html',
  styleUrls: ['./gallerydetail.component.scss']
})
export class GallerydetailComponent implements OnInit {
  imageUrl = '';
  fileUploads = [];
  constructor(private imageService: ImageService,
              private route: ActivatedRoute) { }
               // tslint:disable-next-line:typedef
              getImageUrl(key: string) {
                this.imageService.getGalleryDetail(key).snapshotChanges().map(changes => {
                  return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                }).subscribe((fileUploads: any) => {
          
                  this.fileUploads = fileUploads;
          
                });
              }

  ngOnInit(): void {
    this.getImageUrl(this.route.snapshot.params['id']);
  }

}
