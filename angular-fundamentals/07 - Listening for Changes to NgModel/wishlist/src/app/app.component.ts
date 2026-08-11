import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coding Job', true),
    new WishItem('Find grass that cuts itself'),
  ]

  listFilter : string = '0';

  newWishText : string = '';
  
  title = 'wishlist';

  visibleItems : WishItem[] = this.items;

  addNewWish() {
    // Todo: Implement the logic to add a new wish item to the items array
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''; // Clear the input field after adding the wish
  }

  filterChanged(filterValue: string) {
    if (filterValue ===  '0' ) {
      this.visibleItems = this.items;
    } else if (filterValue === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else  
      this.visibleItems = this.items.filter(item => item.isComplete);
  }

  toggleDone(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)
  }
}
