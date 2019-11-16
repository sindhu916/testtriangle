import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetailsform',
  templateUrl: './userdetailsform.component.html',
  styleUrls: ['./userdetailsform.component.scss']
})
export class UserdetailsformComponent implements OnInit {
  showActive: string;
  constructor(private router: Router) {
    this.showActive = '';
    this.router.events.subscribe((route: any) => {
      this.showActive = route.url;
    });
  }

  ngOnInit() {
  }

}
