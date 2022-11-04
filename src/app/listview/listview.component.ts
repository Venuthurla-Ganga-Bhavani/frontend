import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Details } from '../details';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  us:Details[]=[];
  constructor(private usersservice: UsersService) { }

  ngOnInit(): void {
    
  }

  printUser(event:any){
    this.usersservice.getUsers().subscribe(data => {
      this.us = data;
    })
  }

}
