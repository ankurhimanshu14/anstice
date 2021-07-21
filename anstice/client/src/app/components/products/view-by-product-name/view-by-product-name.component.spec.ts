import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByProductNameComponent } from './view-by-product-name.component';

describe('ViewByProductNameComponent', () => {
  let component: ViewByProductNameComponent;
  let fixture: ComponentFixture<ViewByProductNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByProductNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByProductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
