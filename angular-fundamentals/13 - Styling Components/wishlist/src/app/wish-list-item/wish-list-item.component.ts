import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common'

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  // Recebe o texto
  @Input() wishText!: string; 
  
  // A via de mão dupla do checkbox
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
  return { 
    'strikeout': this.fulfilled, 
    'text-muted': this.fulfilled 
  };
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}