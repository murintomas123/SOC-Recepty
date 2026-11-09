import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptyService, Recept } from '../../services/recepty.service';

@Component({
  selector: 'app-recepty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recepty.html',
  styleUrl: './recepty.css'
})
export class Recepty {
  otvorenyRecept: Recept | null = null;

  constructor(public receptyService: ReceptyService) {}

  otvorDetail(recept: Recept) {
    this.otvorenyRecept = recept;
  }

  zatvorDetail() {
    this.otvorenyRecept = null;
  }

  prepniHeart(event: Event, id: number) {
    event.stopPropagation(); // Zabráni otvoreniu modal okna pri kliknutí na srdiečko
    this.receptyService.prepniOblubeny(id);
  }
}