import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent{

	product:any = {};
	product_title:string = null;

	constructor( private _ps:ProductService, private _route:ActivatedRoute ){

		_route.params.subscribe( params=>{

			this.product_title = params["id"];
			_ps.product_info( params["id"] )
			.subscribe( res => {

				console.log( res.json() );
				this.product = res.json();
			})
		});
	}
}