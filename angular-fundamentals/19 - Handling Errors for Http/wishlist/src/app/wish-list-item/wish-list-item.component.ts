import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../shared/services/eventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  // Recebe o texto
  @Input() wish!: WishItem; 

  get cssClasses() {
  return { 
    'strikeout': this.wish.isComplete, 
    'text-muted': this.wish.isComplete 
  };
  };

  constructor(private event: EventService) {

  }

  removeWish() {
    // Emitir um evento para o componente pai
    this.event.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    // Emitir um evento para o componente pai
    this.wish.isComplete = !this.wish.isComplete;
  }
}