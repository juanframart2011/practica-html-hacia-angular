import { Component } from '@angular/core';
import { InformacionService } from '../../service/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent{

	constructor( public _infoFB:InformacionService ){}
}