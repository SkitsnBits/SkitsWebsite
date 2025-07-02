import { Routes } from '@angular/router';
import { WipComponent } from './page/wip/wip.component';

export const routes: Routes = [
    { path: '', component: WipComponent },
    { path: '**', redirectTo: '/' },
];
