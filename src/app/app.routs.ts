import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersListComponent } from './users/usersList/usersList.component';

const appRoutes:Routes = [
    { path:"", component:HomeComponent },
    { path:"products", component:ProductsComponent },
    { path:"users", component:UsersListComponent },
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);