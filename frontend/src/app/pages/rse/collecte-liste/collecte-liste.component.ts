import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Collecte } from '../../../models/collecte.model';
import { CollecteService } from '../../../services/collecte.service';

@Component({
  selector: 'app-collecte-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collecte-liste.component.html',
  styleUrl: './collecte-liste.component.scss'
})
export class CollecteListeComponent {

  collectes: Collecte[] = [];

  selectedCollecte: any | null = null;

  constructor(
    private collecteService: CollecteService
  ) {}

  ngOnInit(): void {
    this.loadCollectes();
  }

  loadCollectes(): void {
    this.collecteService.getAllCollectes().subscribe(data => this.collectes = data);
  }

  selectCollecte(c: any) {
    this.selectedCollecte = c;
  }
}
