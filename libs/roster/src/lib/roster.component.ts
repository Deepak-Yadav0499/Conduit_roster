import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit } from '@angular/core';
import { RosterService } from '../data-access/roster.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';

@UntilDestroy()
@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [],
  imports: [CommonModule],
  standalone: true,
})
export class RosterComponent implements OnInit {
  userStats: any[] = [];

  constructor(private rosterService: RosterService, private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.rosterService.getUserStats().subscribe((data) => {
      console.log(data);
      this.userStats = data;
      this.changeDetectorRef.markForCheck();
    });
  }
}
