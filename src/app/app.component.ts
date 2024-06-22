import { Component } from '@angular/core';
import { Personal,Social,Project} from './interfacePortfoilo';
import projectData from '../assets/data/projectData.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioKaranveer';
  personalData:Personal = {first: "Karanveer", last:"Masoun"}
  socials:Social = {linkedin: "https://linkedin.com/in/karanveermasoun", gmail: "mailto:masounkaranveer@gmail.com", github: "https://github.com/ksmasoun"}
  project: Project[] = projectData.projects;
  darkMode: boolean = true;

  enableDarkMode() {
    if(this.darkMode === true){
      this.darkMode = false;
    }
    else{
      this.darkMode = true;
    }
  }
  
}
