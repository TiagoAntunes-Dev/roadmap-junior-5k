import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../shared/services/eventService';
import { WishListComponent } from "./wish-list/wish-list.component";
import { WishFilterComponent } from './wish-filter/wish-filter.component'
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishService } from './wish.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];
  activeFilter: any = () => true;
  title = 'wishlist';

  get visibleItems () : WishItem[] {
   return this.items.filter(this.activeFilter)
  };

  newWishText : string = '';

  constructor(private events: EventService, private http: HttpClient, private wishService: WishService) {
  this.events.listen('removeWish', (wish: any) => {
    let index = this.items.indexOf(wish);
    this.items.splice(index, 1);
  })
  }

  ngOnInit(): void {
  this.wishService.getWishes().subscribe({
    next: (data: WishItem[]) => {
      this.items = data;
    },

    error: (error: Error) => {
      console.error('Failed to load wishes:', error);
      alert(error.message);
    }
  });
}

  addNewWish() {
    // Todo: Implement the logic to add a new wish item to the items array
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''; // Clear the input field after adding the wish
  }
}
