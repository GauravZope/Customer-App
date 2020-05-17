import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
    
    {
      name: "Dashboard",
      type: "link",
      tooltip: "Dashboard",
      state: "dashboard/analytics"
    },
    {
      name: "Blank Page",
      type: "link",
      state: "pages/blank"
    },
    {
      name: "Expense Claims",
      type: "link",
      tooltip: "Claim Business Expense here",
      state: "expense-claims-form"
    },
    {
      name: "Regular Expenses",
      type: "link",
      tooltip: "Claim recurring Business Expense here",
      state: "regular-expense-form"
    },
    {
      name: "Common Master",
      type: "dropDown",
      tooltip: "Configure Common setup",
      state: "configurator",
      sub: [
        { name: "Country Master", state: "country-mst-list" },
        { name: "State Master", state: "state-mst-list" },
        { name: "Forgot", state: "forgot-password" },
        { name: "Lock screen", state: "lockscreen" },
        { name: "Not Found", state: "404" },
        { name: "Error", state: "error" }
      ]
    },
    
  ];


  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  
}
