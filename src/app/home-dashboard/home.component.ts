import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/customer.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {CustomerCus} from '../model/customercus';
import { FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listss:CustomerCus []=[];

  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    debugger;
    this.serviceService.getList().subscribe((data)=>{
      debugger;
      this.listss = data;
      // this.searches.sort((a,b) => a.coName.localeCompare(b.coName));
    });
}

}
