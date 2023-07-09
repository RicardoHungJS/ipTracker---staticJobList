import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-project-component',
  templateUrl: './select-project-component.component.html',
  styleUrls: ['./select-project-component.component.scss'],
})
export class SelectProjectComponentComponent {
  constructor(private router: Router) {}

  goToIpTracker() {
    this.router.navigate(['ip-tracker']);
  }

  goToStaticJobList() {
    this.router.navigate(['static-jobs-list']);
  }
}
