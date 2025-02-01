import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com'
  };

  logout() {
    console.log('Déconnexion réussie');
  }
}
