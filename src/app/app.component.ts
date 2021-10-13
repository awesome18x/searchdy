import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'searchdy';
  isRouterWelcome: boolean = false;
  currentRouter!: string;
  constructor(private router: Router) {
    (this.router.events as Observable<any>).pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((data: NavigationEnd) => {
          console.log('data', data);
            if (data.url === '/welcome') {
              this.isRouterWelcome = true;
            } else {
              this.isRouterWelcome = false;
            }
        });
  }

  navigationToJobhay() {
    this.router.navigateByUrl('job-hay');
  }
}
