import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';
import { totals_, patients_ } from 'src/app/data/data';

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

    // const getPatients = await this.trackerService.getPatients().subscribe(response => {
    //   this.patients = response;

    //   console.log('patients', JSON.stringify(this.patients));

    // });

    const d = new Date();
    this.showDate = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    // const getCities = await this.trackerService.getCity().subscribe(response => {
    //   this.totals = response;
    // });

    // const getTotals = await this.trackerService.getTotal().subscribe(response => {
    //   this.totals = response;
    //   console.log('totals', JSON.stringify(this.totals));
    // });

    
    this.patients = patients_;
    this.totals = totals_;

  }


}
