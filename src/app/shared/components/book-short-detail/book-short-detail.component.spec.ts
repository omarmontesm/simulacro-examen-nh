import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShortDetailComponent } from './book-short-detail.component';

describe('BookShortDetailComponent', () => {
  let component: BookShortDetailComponent;
  let fixture: ComponentFixture<BookShortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
