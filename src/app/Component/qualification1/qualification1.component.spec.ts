import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qualification1Component } from './qualification1.component';

describe('Qualification1Component', () => {
  let component: Qualification1Component;
  let fixture: ComponentFixture<Qualification1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qualification1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qualification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
