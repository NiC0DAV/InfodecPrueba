import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRegisterComponent } from './avg-register.component';

describe('AvgRegisterComponent', () => {
  let component: AvgRegisterComponent;
  let fixture: ComponentFixture<AvgRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
