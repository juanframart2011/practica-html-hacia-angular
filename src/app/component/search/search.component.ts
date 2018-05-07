import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent{

	text:string = null;

	constructor( private _ps:ProductService, private _route:ActivatedRoute ){

		_route.params.subscribe( params=>{

			this.text = params["id"];

			_ps.product_seacrh( this.text );
		})
	}
}