import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { BreadcrumbService } from '@xng/my-xng';
=======
import { BreadcrumbService } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff

import { DataService } from '../../core/data.service';

@Component({
  selector: 'bd-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.css'],
})
export class MentorDetailsComponent implements OnInit {
  mentor: { name: string };
  constructor(
    private breadcrumbService: BreadcrumbService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMentor();
  }

  getMentor() {
    const mentorId = this.route.snapshot.paramMap.get('id');

    this.dataService.getMentor(mentorId).subscribe((response) => {
      this.mentor = response;
      this.breadcrumbService.set('mentor/:id', this.mentor.name);
    });
  }

  editMentor() {
    this.router.navigate(['./edit'], {
      relativeTo: this.route,
      queryParams: { type: 'edit' },
    });
  }
}
