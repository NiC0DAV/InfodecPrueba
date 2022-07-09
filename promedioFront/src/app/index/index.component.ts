import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Promedio } from '../models/promedio';
import { UserService } from '../services/user.service'; 



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [UserService]
})
export class IndexComponent implements OnInit {

  public promedios: Array<Promedio>;
  public status: any;
  

  constructor(public _userService: UserService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAverages(); 
  }

  
  getAverages(){
    this._userService.getAverage().subscribe(
      response => {
        if(response.status == "success"){ 
          this.promedios = response.promedios;
        }
    },
    error => {
      this.status = 'Error';
      console.log(<any>error);
    });
  }

  deleteAverage(id){
    // console.log(this.user.userId);
    this._userService.delete(id).subscribe(
      response => {
        this.status = "Success";
        this.getAverages();
      },
      error => {
        console.log(<any>error);
        this.status = "Error"
      }
    )
  }

}
