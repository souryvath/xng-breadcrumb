import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { BreadcrumbService } from '@xng/my-xng';
=======
import { BreadcrumbService } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff

import { DataService } from '../../core/data.service';

@Component({
  selector: 'bd-mentee-details',
  templateUrl: './mentee-details.component.html',
  styleUrls: ['./mentee-details.component.css'],
})
export class MenteeDetailsComponent implements OnInit {
  mentee: unknown;
  constructor(
    private breadcrumbService: BreadcrumbService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMentee();
  }

  getMentee() {
    const menteeId = this.route.snapshot.paramMap.get('id');

    this.dataService.getMentee(menteeId).subscribe((response) => {
      this.mentee = response;
    });
  }

  editMentee() {
    this.router.navigate(['./edit'], { relativeTo: this.route });
  }
}
