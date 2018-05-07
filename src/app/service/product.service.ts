import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

	cargando_product:boolean = false;
	producto:any[] = [];
	productos:any[] = [];
	productos_filtrado:any[] = [];

	constructor( private _http:Http ){

		this.cargar_productos();
	}

	public cargar_productos(){

		this.cargando_product = true;

		let promesa = new Promise( ( resolve, reject )=>{

			this._http.get( 'https://html-angular.firebaseio.com/productos_idx.json' )
			.subscribe( res => {

				this.productos = res.json();
				this.cargando_product = false;
			});

			resolve();
		});

		return promesa;
	}

	public product_info( product:string ){

		this.cargando_product = true;

		return this._http.get( `https://html-angular.firebaseio.com/productos/${product}.json` );
	}

	public product_seacrh( text:string ){

		if( this.productos.length === 0 ){
			
			this.cargar_productos().then( ()=>{

				this.filtrar_productos( text );
			});
		}
		else{

			this.filtrar_productos( text );
		}
	}

	private filtrar_productos( txt:string ){

		this.productos_filtrado = [];

		txt = txt.toLowerCase();

		this.productos.forEach( prod=>{

			if( prod.categoria.indexOf( txt ) >= 0 || prod.titulo.toLowerCase().indexOf( txt ) >= 0 ){

				console.log( prod );
				this.productos_filtrado.push( prod );
			}
		});
	}
}