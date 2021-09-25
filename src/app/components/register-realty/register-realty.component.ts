import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-realty',
  templateUrl: './register-realty.component.html',
  styleUrls: ['./register-realty.component.scss']
})
export class RegisterRealtyComponent implements OnInit {
  isShowWeb = false;
  isShowSocialNetwork = false;

  addInfoUser!: FormGroup;
  addInfoSocial!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addInfoUser = this.fb.group({
      website: new FormArray([])
    });
    this.addInfoSocial = this.fb.group({
      social: new FormArray([])
    });
  }

  // tslint:disable-next-line:typedef
  get websiteArray() {
    return (this.addInfoUser.get('website') as FormArray).controls;
  }

  showWeb(): void{
    this.isShowWeb = true;
  }

  showSocialNetwork(): void {
    this.isShowSocialNetwork = true;
  }

  onAddWebsite(): void {
    const control = new FormControl('', [Validators.required]);
    (this.addInfoUser.get('website') as FormArray).push(control);
  }

  onAddSocialNetwork(): void {
    const control = new FormControl('', [Validators.required]);
    (this.addInfoSocial.get('social') as FormArray).push(control);
  }

}
