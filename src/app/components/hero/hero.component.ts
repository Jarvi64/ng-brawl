import { Component, OnInit, effect, inject} from '@angular/core';
import { BrawlStore } from '../../stored/brawl.store';
import { JsonPipe } from '@angular/common';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  readonly store = inject(BrawlStore);
  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('brawl state changed', state);
    });
  }

  ngOnInit(): void {
    this.store.loadClubInfo();
  }
}
