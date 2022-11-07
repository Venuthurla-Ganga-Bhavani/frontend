import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-listviewlist',
  templateUrl: './listviewlist.component.html',
  styleUrls: ['./listviewlist.component.css']
})
export class ListviewlistComponent implements OnInit {


  details: Details = new Details();
  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.usersService.createCustomer(this.details).subscribe( data => {
      console.log(data);
      this.gotoCustomerList();
    },
    error => console.log(error));
  }

  gotoCustomerList(){

    this.router.navigate(['/getcustomer']);
  }

  onSubmit(){
    console.log(this.details);
    this.saveCustomer();
  }

 // updateCustomer(){
    //this.router.navigate(['update-customer',id]);
  //}

  //deleteRow(val) {
   // this.rs.deleteCustomer(val).subscribe(data => {
    //});
    //this.rs.getCustomer().subscribe((response) => {
     // this.users = response;
    //});
 // }

 
}
