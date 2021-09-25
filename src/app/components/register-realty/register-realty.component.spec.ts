import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRealtyComponent } from './register-realty.component';

describe('RegisterRealtyComponent', () => {
  let component: RegisterRealtyComponent;
  let fixture: ComponentFixture<RegisterRealtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRealtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
