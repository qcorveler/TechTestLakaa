import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollecteService } from '../../services/collecte.service';
import { IndicatorService } from '../../services/indicator.service';
import { Collecte } from '../../models/collecte.model';
import { Indicator } from '../../models/indicator.model';

@Component({
  selector: 'app-rse',
  standalone: true,
  templateUrl: './rse.component.html',
  styleUrl: './rse.component.scss',
  imports: [CommonModule, FormsModule]
})
export class RseComponent implements OnInit {
  collectes: Collecte[] = [];
  indicators: Indicator[] = [];
  newIndicator: Indicator = { name: '', type: 'NUMBER' };

  constructor(
    private collecteService: CollecteService,
    private indicatorService: IndicatorService
  ) {}

  ngOnInit(): void {
    this.loadCollectes();
    this.loadIndicators();
  }

  loadCollectes(): void {
    this.collecteService.getAllCollectes().subscribe(data => this.collectes = data);
  }

  loadIndicators(): void {
    this.indicatorService.getAllIndicators().subscribe(data => this.indicators = data);
  }

  addIndicator(): void {
    this.indicatorService.createIndicator(this.newIndicator).subscribe(() => {
      this.newIndicator = { name: '', type: 'NUMBER' };
      this.loadIndicators();
    });
  }

  deleteIndicator(id: number): void {
    this.indicatorService.deleteIndicator(id).subscribe(() => this.loadIndicators());
  }

}
