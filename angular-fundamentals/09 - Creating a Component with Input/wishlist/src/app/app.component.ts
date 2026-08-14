import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coding Job', true),
    new WishItem('Find grass that cuts itself'),
  ]

  listFilter : any = '0';

  newWishText : string = '';
  
  title = 'wishlist';

  get visibleItems () : WishItem[] {
   return this.items.filter(filters[parseInt(this.listFilter)]);
  };

  addNewWish() {
    // Todo: Implement the logic to add a new wish item to the items array
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''; // Clear the input field after adding the wish
  }

  filterChanged(filterValue: string) {
  }
}
