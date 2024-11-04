import { Routes } from '@angular/router';
import { CharcterlistComponent } from './components/charcterlist/charcterlist.component';
import { CharcterformComponent } from './components/charcterform/charcterform.component';
import { CharcterdetailComponent } from './components/charcterdetail/charcterdetail.component';

export const routes: Routes = [

    {path:'characters', component: CharcterlistComponent},
    {path:'/characters/:id', component: CharcterdetailComponent},
    {path:'add', component: CharcterformComponent},
    { path: '', redirectTo: '/characters', pathMatch: 'full' }
];
