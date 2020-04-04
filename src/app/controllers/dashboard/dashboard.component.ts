import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit {

  byCities: any = {};
  totals: any;
  patients: any;
  showDate;

  constructor(
    public trackerService: TrackerService
  ) { }

  async ngOnInit() {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getPatients = await this.trackerService.getPatients().subscribe(response => {
      this.patients = response;
    });

    const d = new Date();
    this.showDate = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    const getCities = await this.trackerService.getCity().subscribe(response => {
      this.totals = response;
    });

    const getTotals = await this.trackerService.getTotal().subscribe(response => {
      this.totals = response;
    });

    
  }


}
