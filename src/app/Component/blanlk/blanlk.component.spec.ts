import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanlkComponent } from './blanlk.component';

describe('BlanlkComponent', () => {
  let component: BlanlkComponent;
  let fixture: ComponentFixture<BlanlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlanlkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlanlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
