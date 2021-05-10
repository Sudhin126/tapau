import { Component, OnInit } from '@angular/core';
import { DeliveryboysService } from '../service/deliveryboys.service';
import { Router } from '@angular/router';
import { Deliveryboys } from '../model/deliveryboys';


@Component({
  selector: 'app-deliveryboys-dashboard',
  templateUrl: './deliveryboys-dashboard.component.html',
  styleUrls: ['./deliveryboys-dashboard.component.css']
})
export class DeliveryboysDashboardComponent implements OnInit {
  delivery:Deliveryboys []=[];

  constructor(private deliveryboysService: DeliveryboysService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    debugger;
    this.deliveryboysService.getList().subscribe((data)=>{
      debugger;
      this.delivery = data["data"];
      // this.searches.sort((a,b) => a.coName.localeCompare(b.coName));
    });
}


}
