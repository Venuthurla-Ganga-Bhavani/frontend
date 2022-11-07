import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {

  id!: number;
  details: Details = new Details();
  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usersService.getCustomerById(this.id).subscribe(data => {
      this.details = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.usersService.updateCustomer(this.id, this.details).subscribe(data => {
      this.goToCustomerList();
    },
      error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/listview']);
  }

  

}
