import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const appRoutes:Routes = [
    { path:"", component:HomeComponent },
    { path:"products", component:ProductsComponent },
    { path:"users", component:UsersComponent },
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);