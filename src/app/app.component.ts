import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joao';
  userInfo = {
    email: 'Pablo@email.com',
    role: 'User',
  };
  title = 'projeto-angular';
}
