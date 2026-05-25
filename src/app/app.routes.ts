import { Routes } from '@angular/router';
import { WipComponent } from './page/wip/wip.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { StaffPageComponent } from './page/staff-page/staff-page.component';

export const routes: Routes = [
    { path: 'test', component: HomePageComponent },
    { path: '', component: WipComponent },
    { path: 'staff', component: StaffPageComponent },
    { path: '**', redirectTo: '/' },
];
