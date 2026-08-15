import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from "../../../shared/models/wishItem";
import { FormsModule } from '@angular/forms';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: false,
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  listFilter : any = '0';

  ngOnInit(): void {
    // Emite a regra do "All" logo que o componente nasce na tela
    this.updateFilter('0');
  }

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}