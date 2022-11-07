import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Details } from '../details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  
  us:Details[]=[];

  constructor(private usersservice: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.printUser();
  }

  printUser(){
    this.usersservice.getUsers().subscribe(data => {
      this.us = data;
    });
  }

  onDeleteCustomer(id: number){
    this.usersservice.onDeleteCustomer(id).subscribe(data => {
      console.log(data);
      this.printUser();
    });


  }

  updateCustomer(id: number){

    this.router.navigate(['deletecustomer',id]);
  }

  

}
