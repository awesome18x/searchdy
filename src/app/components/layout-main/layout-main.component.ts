import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup } from "@angular/forms";


@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-md' }));
  }

  openModalLogin(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-md' }));
  }

  goToRegisterRealty() {
    this.modalService.hide();
    this.router.navigateByUrl('/register-realty');
  }

}
