import { Component, OnInit } from '@angular/core';
import { CollecteService } from '../../services/collecte.service';
import { Collecte } from '../../models/collecte.model';
import { BaseIndicator } from '../../models/base-indicator.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollecteModalComponent } from './collecte-modal/collecte-modal.component';
import { IndicatorService } from '../../services/indicator.service';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CreateCollecteRequest } from '../../models/collecte-request.model';

@Component({
  selector: 'app-magasin',
  standalone: true,
  imports: [CommonModule, FormsModule, CollecteModalComponent],
  templateUrl: './magasin.component.html',
  styleUrl: './magasin.component.scss'
})
export class MagasinComponent implements OnInit {
  
  showModal = false;
  indicateurs: BaseIndicator[] = [];

  collectes: Collecte[] = [];

  constructor(private collecteService: CollecteService, private indicatorService: IndicatorService) {}

  ngOnInit(): void {
    this.loadCollectes();
    this.loadIndicators();
  }

  loadCollectes(): void {
    this.collecteService.getAllCollectes().subscribe(data => this.collectes = data);
  }

  loadIndicators(): void {
    this.indicatorService.getAllBaseIndicators()
      .subscribe(data => this.indicateurs = data);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitCollecte(payload : CreateCollecteRequest) {
    this.collecteService.createCollecte(payload).subscribe(() => {
    this.loadCollectes();
    this.closeModal();
  });
  }

}
