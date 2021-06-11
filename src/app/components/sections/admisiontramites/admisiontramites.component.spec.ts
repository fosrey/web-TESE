import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisiontramitesComponent } from './admisiontramites.component';

describe('AdmisiontramitesComponent', () => {
  let component: AdmisiontramitesComponent;
  let fixture: ComponentFixture<AdmisiontramitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisiontramitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisiontramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
