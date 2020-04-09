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

  ngOnInit() {

    var divElement = document.getElementById('viz1586424330264');
    var vizElement = divElement.getElementsByTagName('object')[0];
    
    var container = document.getElementById('container');

    var containerHeight = container.offsetHeight;
    var containerWidth = container.offsetWidth;

    vizElement.style.height = containerHeight+'px';
    vizElement.style.width = containerWidth+'px';

    
     var scriptElement = document.createElement('script');
     scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);



    return;
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
