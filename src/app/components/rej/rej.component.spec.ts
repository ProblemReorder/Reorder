import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejComponent } from './rej.component';

describe('RejComponent', () => {
  let component: RejComponent;
  let fixture: ComponentFixture<RejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
