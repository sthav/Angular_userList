import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: { name: string, email: string }[]=[];

  sortedUsers: { name: string, email: string }[]=[];

  ngOnInit() {
    this.sortedUsers = [...this.users];
  }

  sortByName() {
    this.sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
  }
}
