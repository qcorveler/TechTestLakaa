import { Component, OnInit } from '@angular/core';
import { CollecteService } from '../../services/collecte.service';
import { Collecte } from '../../models/collecte.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-magasin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './magasin.component.html',
  styleUrl: './magasin.component.scss'
})
export class MagasinComponent implements OnInit {
  
  collectes: Collecte[] = [];
  newCollecte: Collecte = { date: '', association: '' };

  constructor(private collecteService: CollecteService) {}

  ngOnInit(): void {
    this.loadCollectes();
  }

  loadCollectes(): void {
    this.collecteService.getAllCollectes().subscribe(data => this.collectes = data);
  }

  addCollecte(): void {
    this.collecteService.createCollecte(this.newCollecte).subscribe(() => {
      this.newCollecte = { date: '', association: '' };
      this.loadCollectes();
    });
  }

}
