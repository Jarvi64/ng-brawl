import { Component, OnInit, effect, inject} from '@angular/core';
import { BrawlStore } from '../../store/brawl.store';
import { JsonPipe } from '@angular/common';
import { getState } from '@ngrx/signals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{
  readonly store = inject(BrawlStore);
  router = inject(Router);
  route = inject(ActivatedRoute);
  

  navigate(tag:string){
      this.router.navigate([tag], { relativeTo: this.route });
  }
}
