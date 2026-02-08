import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurListeComponent } from './indicateur-liste.component';

describe('IndicateurListeComponent', () => {
  let component: IndicateurListeComponent;
  let fixture: ComponentFixture<IndicateurListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicateurListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicateurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
