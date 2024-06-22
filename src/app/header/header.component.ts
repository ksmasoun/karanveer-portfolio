import { Component, Input } from '@angular/core';
import { Social, Personal} from '../interfacePortfoilo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() personal!: Personal;
  @Input() social!: Social;
  @Input() darkMode!: boolean;
}
