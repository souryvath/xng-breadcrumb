import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/data.service';
import { Mentor } from '../../shared/models/mentor';
<<<<<<< HEAD
import { BreadcrumbService } from '@xng/my-xng';
=======
import { BreadcrumbService } from 'xng-breadcrumb';
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff

@Component({
  selector: 'bd-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css'],
})
export class MentorListComponent implements OnInit {
  mentors: Mentor[];
  constructor(
    private dataService: DataService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.getMentors();
    this.breadcrumbService.set('mentor', 'Enabler');
  }

  getMentors() {
    this.dataService.getMentors().subscribe((response) => {
      this.mentors = response.sort((a, b) => {
        return (
          new Date(b.updatedTs).getTime() - new Date(a.updatedTs).getTime()
        );
      });
    });
  }
}
