import { StateMstService } from './../../../../services/state-mst.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-mst-list',
  templateUrl: './state-mst-list.component.html',
  styleUrls: ['./state-mst-list.component.scss']
})
export class StateMstListComponent {

  constructor(private stateService : StateMstService){

  }
  cols = [
    { key: "_id", display: "User Id" },
    { key: "username", display: "Username", "sort": "false" },
    { key: "email", display: "Email" },
    // following objects will contain a specific config parameters
    // based on this params we will change the display of each column
    {
      key: "dob",
      display: "Date of Birth",
      // This column will hold a date value, so we must format the
      // display to show as a date
      config: {
        isDate: true,
        format: "dd MMM yy"
      }
    },
    {
      key: "actif",
      display: "Actif/Blocked",
      // this column holds a boolean value, we will display a value
      // in true/false cases
      config: {
        isBoolean: true,
        values: { true: "Blocked", false: "Actif" }
      }
    },
    {
      key: "action",
      display: "Action",
      // in this column we have actions like activate/block account
      // so we will create a button and create it event click
      config: {
        isAction: true,
        actions: ["delete", "edit"]
      }
    }
  ];

  USERS_DATA = [
    {
      _id: 1,
      username: "Abderrahmene",
      email: "abderrahmene@abc.xyz",
      dob: Date.now(),
      actif: true
    },
    {
      _id: 2,
      username: "Mohammed",
      email: "mohammed@abc.xyz",
      dob: Date.now(),
      actif: false
    },
    {
      _id: 3,
      username: "Mustapha",
      email: "mustapha@abc.xyz",
      dob: Date.now(),
      actif: true
    },
    {
      _id: 4,
      username: "Abdelaziz",
      email: "abdelaziz@abc.xyz",
      dob: Date.now(),
      actif: false
    },
    {
      _id: 5,
      username: "Abdelhakim",
      email: "hakim@abc.xyz",
      dob: Date.now(),
      actif: true
    },
    {
      _id: 6,
      username: "Ilyes",
      email: "ilyes@abc.xyz",
      dob: Date.now(),
      actif: true
    },
    {
      _id: 7,
      username: "Salim",
      email: "salim@abc.xyz",
      dob: Date.now(),
      actif: false
    },
    {
      _id: 8,
      username: "Omar",
      email: "omar@abc.xyz",
      dob: Date.now(),
      actif: true
    },
    {
      _id: 9,
      username: "Issam",
      email: "issam@abc.xyz",
      dob: Date.now(),
      actif: false
    },
    {
      _id: 10,
      username: "Osman",
      email: "osman@abc.xyz",
      dob: Date.now(),
      actif: false
    }
  ];

  onActionHandler(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.getAll();
    
  }

  private getAll(){
    this.stateService.getAllStates().subscribe(res=> {
      this.USERS_DATA = res;
    },err=>console.log(err))
  }
}
