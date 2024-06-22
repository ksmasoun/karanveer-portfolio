import { Component,Input } from '@angular/core';
import { Social} from '../interfacePortfoilo';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() social!:Social;
  @Input() darkMode!:boolean;
}
