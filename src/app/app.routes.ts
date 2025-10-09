import { Routes } from '@angular/router';
import { WipComponent } from './page/wip/wip.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    { path: '', component: WipComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/' },
];
