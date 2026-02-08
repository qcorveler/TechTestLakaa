import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndicatorService } from '../../../services/indicator.service';
import { Indicator } from '../../../models/indicator.model';
import { BaseIndicator } from '../../../models/base-indicator.model';

@Component({
  selector: 'app-indicateur-liste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './indicateur-liste.component.html',
  styleUrl: './indicateur-liste.component.scss'
})
export class IndicateurListeComponent implements OnInit {

  indicateurs: BaseIndicator[] = [];

  newIndicator : Indicator = {
    name: '',
    type: 'NUMBER',
    unit: '',
    required: false
  };

  constructor(
    private indicatorService: IndicatorService
  ) {}

  ngOnInit(): void {
    this.loadIndicators();
  }

  loadIndicators(): void {
    this.indicatorService.getAllBaseIndicators().subscribe(data => this.indicateurs = data);
  }

  addIndicator() {
    if (!this.newIndicator.name) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }
    this.indicatorService.createIndicator(this.newIndicator).subscribe(() => {
      this.newIndicator = { name: '', type: 'NUMBER', unit: '', required: false };
      this.loadIndicators();
    });
  }

  deleteIndicator(id: number) {
    console.log("Supprimer l'indicateur avec id", id);
    this.indicatorService.deleteIndicator(id).subscribe(() => {
      this.loadIndicators();
    });
  }

}
