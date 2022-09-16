import { Component, OnInit } from '@angular/core';
import { SongrequestService } from '../Services/songrequest.service';
import { CodeValidator } from '../models/valitator.model';

@Component({
  selector: 'app-validationcode',
  templateUrl: './validationcode.component.html',
  styleUrls: ['./validationcode.component.scss'],
   providers: [SongrequestService]
})
export class ValidationcodeComponent implements OnInit {
  codevalidator: CodeValidator = new CodeValidator();
  constructor(private songlistservice: SongrequestService) { }
  fileUploads = [];
  ngOnInit(): void {
    this.getAllCodes();
  }
  getAllCodes() {
    // Use snapshotChanges().map() to store the key
    this.songlistservice.getCodeValidators().snapshotChanges().map(changes => {
     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
   }).subscribe((fileUploads: any) => {

     this.fileUploads = fileUploads.sort((a, b) => (a.createdOn < b.createdOn) ? 1 : -1);

   });
 }

 makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


  
  // tslint:disable-next-line:typedef
  createCode() {
   this.codevalidator.createdOn = Date.now().toString();
   this.codevalidator.id = this.makeid();
   this.songlistservice.generateCode(this.codevalidator);
  }

}
