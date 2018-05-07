import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})

export class PortafolioComponent{

	constructor( private _ps:ProductService ){}
}