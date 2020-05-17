import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/Models/user-model';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  user: User;

  constructor(private auth:AuthService, private router: Router) { }
  user$: Observable<User>;
  ngOnInit(): void {
   this.user$ = this.auth.currentUser;
   this.user$.subscribe(data =>{
     console.log(data)
   }
   )
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  signOut(){
    this.auth.logout();
    this.router.navigate(['']);
  }

}
