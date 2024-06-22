import { Component,Input } from '@angular/core';
import { Personal} from '../interfacePortfoilo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() personal!: Personal;
  @Input() darkMode!:boolean;
}
