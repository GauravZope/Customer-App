import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  private menuItemsSub: Subscription;
  public hasIconTypeMenuItem: boolean;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  constructor(private navService:NavigationService) { }

  ngOnInit(): void {
    this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(
        item => item.type === "icon"
      ).length;
    });


  }

  toggleSideBar() {
    console.log("Inside toggleSideBar")
    this.toggleSideBarForMe.emit(new Event('close'));
    setTimeout(() => {
      window.dispatchEvent(
        new Event('close')
      );
    }, 300);
  }

}
