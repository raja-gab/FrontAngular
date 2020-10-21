import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavLightComponent } from './layout-sidenav-light.component';

describe('LayoutSidenavLightComponent', () => {
  let component: LayoutSidenavLightComponent;
  let fixture: ComponentFixture<LayoutSidenavLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSidenavLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSidenavLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
