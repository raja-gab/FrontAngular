import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCatComponent } from './sous-cat.component';

describe('SousCatComponent', () => {
  let component: SousCatComponent;
  let fixture: ComponentFixture<SousCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
