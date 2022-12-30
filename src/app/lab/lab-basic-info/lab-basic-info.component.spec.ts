import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBasicInfoComponent } from './lab-basic-info.component';

describe('LabBasicInfoComponent', () => {
  let component: LabBasicInfoComponent;
  let fixture: ComponentFixture<LabBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
