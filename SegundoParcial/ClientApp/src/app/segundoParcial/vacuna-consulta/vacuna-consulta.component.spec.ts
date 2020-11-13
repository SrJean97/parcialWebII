import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaConsultaComponent } from './vacuna-consulta.component';

describe('VacunaConsultaComponent', () => {
  let component: VacunaConsultaComponent;
  let fixture: ComponentFixture<VacunaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacunaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
