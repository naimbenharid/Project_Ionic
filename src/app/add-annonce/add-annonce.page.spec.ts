import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAnnoncePage } from './add-annonce.page';

describe('AddAnnoncePage', () => {
  let component: AddAnnoncePage;
  let fixture: ComponentFixture<AddAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
