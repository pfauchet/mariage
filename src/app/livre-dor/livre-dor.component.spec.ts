import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreDorComponent } from './livre-dor.component';

describe('LivreDorComponent', () => {
  let component: LivreDorComponent;
  let fixture: ComponentFixture<LivreDorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreDorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreDorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
