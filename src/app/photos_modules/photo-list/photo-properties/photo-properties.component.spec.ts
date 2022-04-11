import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPropertiesComponent } from './photo-properties.component';

describe('PhotoPropertiesComponent', () => {
  let component: PhotoPropertiesComponent;
  let fixture: ComponentFixture<PhotoPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
