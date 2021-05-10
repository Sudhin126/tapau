import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../service/packages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
packk=[];
  constructor(private packagesService: PackagesService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    debugger;
    this.packagesService.getList().subscribe((data)=>{
      debugger;
      this.packk = data["data"];
      // this.searches.sort((a,b) => a.coName.localeCompare(b.coName));
    });
}
deleteList(id:string) {
  this.packagesService.deleteList(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

}
