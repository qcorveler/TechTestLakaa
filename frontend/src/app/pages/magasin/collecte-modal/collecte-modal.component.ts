import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseIndicator } from '../../../models/base-indicator.model';

@Component({
  selector: 'app-collecte-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './collecte-modal.component.html',
  styleUrls: ['./collecte-modal.component.scss']
})
export class CollecteModalComponent {

  @Input() indicateurs: BaseIndicator[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() submitCollecte = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const controls: any = {
      date: ['', Validators.required],
      association: ['', Validators.required]
    };

    this.indicateurs.forEach(ind => {
      if (ind.type === 'BOOLEAN') {
        controls['ind_' + ind.id] = [false, ind.required ? Validators.required : []];
      } else {
        controls['ind_' + ind.id] = ['', ind.required ? Validators.required : []];
      }
    });

    this.form = this.fb.group(controls);
  }

  submit() {
    if (this.form.invalid) {
    this.form.markAllAsTouched();
    alert('Veuillez remplir les champs obligatoires');
    return; // Empêche la soumission
    }

    const payload = {
    date: this.form.value.date,
    association: this.form.value.association,
    indicatorValues: this.indicateurs.map(ind => ({
      indicatorId: ind.id,
      value: this.form.value['ind_' + ind.id]
    }))
    }

    console.log("Payload à soumettre", payload);
    this.submitCollecte.emit(payload);
  }
}
