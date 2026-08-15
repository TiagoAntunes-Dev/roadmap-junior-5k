import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>();

  newWishText: string = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}