import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
    { path: '', redirectTo:'gang' ,pathMatch: 'full'},
    { path: 'gang', component: HeroComponent },
    { path: 'gang/:tag', component: DetailComponent }
];
