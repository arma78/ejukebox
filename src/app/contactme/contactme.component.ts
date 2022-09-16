import { Component, OnInit } from '@angular/core';
import { ContactMeService } from '../Services/ContactMeService';
import { NgForm, NgControl } from '@angular/forms';
import { ContactMe } from '../models/contactme.model';
import { CustomvalidationService } from '../Services/customvalidation.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AngularFireList } from '@angular/fire/database/database';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
  providers: [ContactMeService]
})

export class ContactmeComponent implements OnInit {
  public contactForm: FormGroup;
  submitted = false;
  contactMeList: AngularFireList<any>;

  contactMe: ContactMe = new ContactMe();

  constructor(private contactMeService: ContactMeService,
    // tslint:disable-next-line:align
    private router: Router,
    // tslint:disable-next-line:align
    private formBuilder: FormBuilder,
    // tslint:disable-next-line:align
    private customValidator: CustomvalidationService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    }
    );
  }
  // tslint:disable-next-line:typedef
  get firstName() {
    return this.contactForm.get('firstName');
  }
  // tslint:disable-next-line:typedef
  get lastName() {
    return this.contactForm.get('lastName');
  }
  // tslint:disable-next-line:typedef
  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }
  // tslint:disable-next-line:typedef
  get email() {
    return this.contactForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get comments() {
    return this.contactForm.get('comments');
  }



  // tslint:disable-next-line:typedef
  onSubmit() {
    this.contactMeService.create(this.contactMe);
    this.router.navigate(['gallery']);
    this.submitted = true;
  }

}


