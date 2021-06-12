import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesodeadmisionComponent } from './procesodeadmision.component';

describe('ProcesodeadmisionComponent', () => {
  let component: ProcesodeadmisionComponent;
  let fixture: ComponentFixture<ProcesodeadmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesodeadmisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesodeadmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
