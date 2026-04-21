import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { UserHome } from './user-home/user-home';
//మీరు చూసిన code ఇది. ఇదే మీ app యొక్క root component. @Component decorator తో class define చేస్తారు.
@Component({
  selector: 'app-root', // HTML లో <app-root> అని వాడతారు
  standalone: true, 
  imports: [UserCard, RouterOutlet, UserHome], // ✅ multiple imports allowed
  templateUrl: './app.html',  // UI ఇక్కడ ఉంటుంది
  styleUrl: './app.css' ,   // styles ఇక్కడ
})
export class App {
  //protected readonly title = signal('my-app-suresh'); // Angular 17+ signal వాడుతున్నారు
  protected readonly title = signal('my-app-suresh'); // Angular 17+ signal వాడుతున్నారు
  
}
