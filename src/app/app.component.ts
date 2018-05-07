import { Component } from '@angular/core';
import { InformacionService } from './service/informacion.service';
import { ProductService } from './service/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor( 
					public _info:InformacionService,
					public _ps:ProductService
				){

		//this._info;
	}
}