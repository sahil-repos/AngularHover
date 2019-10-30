import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService} from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => this.users = data);
  }

}
