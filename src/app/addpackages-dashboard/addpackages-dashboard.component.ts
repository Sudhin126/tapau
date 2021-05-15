import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpackages-dashboard',
  templateUrl: './addpackages-dashboard.component.html',
  styleUrls: ['./addpackages-dashboard.component.css']
})
export class AddpackagesDashboardComponent implements OnInit {
  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}


}
