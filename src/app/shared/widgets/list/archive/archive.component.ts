import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

	@Input() archive : any;

	constructor() { }

	ngOnInit() {
	}

}
