import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Promedio } from '../models/promedio';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-avg-register',
  templateUrl: './avg-register.component.html',
  styleUrls: ['./avg-register.component.css'],
  providers: [UserService]
})
export class AvgRegisterComponent implements OnInit {

  public promedio: Promedio;
  public status: any;


  constructor(private _userService: UserService) { 
    this.promedio = new Promedio('', 0, 0, 0, 0, 0);

  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._userService.register(this.promedio).subscribe(
      response => {
        console.log(response);
        if (response.status == 'success') {
          this.status = response.status;
          form.reset();
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }

    );

  }

}
