import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdListsComponent } from './ad-lists.component';

describe('AdListsComponent', () => {
  let component: AdListsComponent;
  let fixture: ComponentFixture<AdListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
