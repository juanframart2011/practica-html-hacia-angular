import { Component } from '@angular/core';
import { InformacionService } from '../../service/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent{

	constructor( public _info:InformacionService ){}
	anio:number = new Date().getFullYear();
}