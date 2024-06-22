import { Component, Input } from '@angular/core';
import { Personal } from '../interfacePortfoilo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() personal!: Personal;
  @Input() darkMode!: boolean;
}
