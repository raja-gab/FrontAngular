import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategorieComponent } from './admin-categorie.component';

describe('AdminCategorieComponent', () => {
  let component: AdminCategorieComponent;
  let fixture: ComponentFixture<AdminCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
