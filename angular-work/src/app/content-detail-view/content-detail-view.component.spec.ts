import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailViewComponent } from './content-detail-view.component';

describe('ContentDetailViewComponent', () => {
  let component: ContentDetailViewComponent;
  let fixture: ComponentFixture<ContentDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
