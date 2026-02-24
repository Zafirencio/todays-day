import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ioc-angular-todaysday-joelfont');
  constructor()
  {
    console.log('Inicialització de Today\'s Day confirmada!');
  }
}
