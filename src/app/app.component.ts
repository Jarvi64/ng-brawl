import { Component, effect, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { getState } from '@ngrx/signals';
import { BrawlStore } from './store/brawl.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
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
