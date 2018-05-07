import { Component } from '@angular/core';
import { InformacionService } from '../../service/informacion.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: []
})
export class HeaderComponent{

	constructor( public _info:InformacionService, private _router:Router ){}

	search_product( text:string ){

		this._router.navigate( ['search', text] );
	}
}