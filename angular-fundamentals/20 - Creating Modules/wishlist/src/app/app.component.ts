import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from '../shared/services/eventService';
import { WishService } from './wish.service';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];
  activeFilter: any = () => true;
  title = 'wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(this.activeFilter);
  }

  newWishText: string = '';

  constructor(
    private events: EventService,
    private wishService: WishService
  ) {
    this.events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
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

  addNewWish(): void {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}