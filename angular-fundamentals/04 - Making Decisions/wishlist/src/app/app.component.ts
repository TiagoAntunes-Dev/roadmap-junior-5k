import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
   // new WishItem('Learn Angular'),
   // new WishItem('Get Coding Job'),
   // new WishItem('Find grass that cuts itself'),
  ]
  title = 'wishlist';

  toggleDone(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
