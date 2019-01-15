import { Component } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  constructor(private authService: AuthService) { }

  public logout(): void {
    this.authService.logout();
  }

}
