import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from "../../shared/models/wishItem";

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = [];

  toggleDone(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)
  }

}
