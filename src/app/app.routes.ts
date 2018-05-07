import { RouterModule, Routes } from '@angular/router';

import {
	PortafolioComponent,
	AboutComponent,
	ItemComponent,
	SearchComponent
} from "./component/index.paginas";

const app_routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'home', component: PortafolioComponent },
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'search/:id', component: SearchComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot( app_routes, { useHash:true } );