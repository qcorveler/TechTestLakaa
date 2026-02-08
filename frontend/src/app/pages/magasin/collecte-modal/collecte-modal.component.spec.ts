import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecteModalComponent } from './collecte-modal.component';

describe('CollecteModalComponent', () => {
  let component: CollecteModalComponent;
  let fixture: ComponentFixture<CollecteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollecteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollecteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
