import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
