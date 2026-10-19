import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Recept {
  id: number;
  nazov: string;
  popis: string;
  obrazok: string; 
  suroviny: string[];
  cas: string;
}

@Component({
  selector: 'app-recepty',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterLink
  ],
  templateUrl: './recepty.html',
  styleUrl: './recepty.css'
})
export class Recepty implements OnInit {
  private route = inject(ActivatedRoute);

  vsetkyRecepty: Recept[] = [
    {
      id: 1,
      nazov: 'Kráľovská praženica',
      popis: 'Nadýchaná praženica na masielku s cibuľkou a rozpusteným syrom.',
      obrazok: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
      suroviny: ['vajcia', 'cibuľa', 'syr', 'maslo'],
      cas: '10 min'
    },
    {
      id: 2,
      nazov: 'Domáce palacinky',
      popis: 'Jemné, tenké palacinky plnené džemom alebo čokoládou.',
      obrazok: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80',
      suroviny: ['mlieko', 'múka', 'vajcia', 'cukor'],
      cas: '25 min'
    },
    {
      id: 3,
      nazov: 'Zapekané zemiaky so syrom',
      popis: 'Chrumkavé zemiaky pečené v rúre so smotanou a syrovou kôrkou.',
      obrazok: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80',
      suroviny: ['zemiaky', 'syr', 'smotana', 'cesnak'],
      cas: '45 min'
    }
  ];

  filtrovaneRecepty: Recept[] = [];
  vyhladanaSurovina: string = '';

  ngOnInit() {
this.route.queryParams.subscribe(params => {
    this.vyhladanaSurovina = params['surovina'] || '';

    if (this.vyhladanaSurovina.trim() !== '') {
      const hladanyText = this.vyhladanaSurovina.toLowerCase().trim();
      
      this.filtrovaneRecepty = this.vsetkyRecepty.filter(recept =>
        recept.suroviny.some(surovina => surovina.toLowerCase().includes(hladanyText)) ||
        recept.nazov.toLowerCase().includes(hladanyText)
      );
    } else {
      this.filtrovaneRecepty = this.vsetkyRecepty;
    }
    });
  }
}