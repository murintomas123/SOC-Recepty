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
      nazov: 'Špagety Carbonara',
      popis: 'Klasické talianske cestoviny s krémovou omáčkou z vajec, syra a slaniny.',
      obrazok: 'https://kuchynalidla.sk/storage/app/uploads/public/5fa/c0e/376/5fac0e37626a8863195401.jpg',
      suroviny: ['špagety', 'vajcia', 'slanina', 'parmezán'],
      cas: '30 min'
    },
    {
      id: 2,
      nazov: 'Kuracie prsia na grile',
      popis: 'Šťavnaté kuracie prsia marinované v bylinkách a grilované do dokonalosti.',
      obrazok: 'https://kuchynalidla.sk/storage/app/uploads/public/5fa/c0e/256/5fac0e256dbbe659066848.jpg',
      suroviny: ['kuracie prsia', 'olivový olej', 'bylinky', 'soľ', 'korenie'],
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