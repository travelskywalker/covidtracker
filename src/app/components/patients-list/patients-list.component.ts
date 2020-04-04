import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-patients-list',
  styleUrls: ['patients-list.component.scss'],
  templateUrl: 'patients-list.component.html',
})
export class PatientsListComponent implements OnInit {
  // attributes:
  //     FID: 1
  //     sequ: 1
  //     PH_masterl: "PH1"
  //     edad: 38
  //     kasarian: "Female"
  //     nationalit: "Chinese"
  //     residence: "None"
  //     travel_hx: "Yes (China); Wife of PH2"
  //     symptoms: " "
  //     confirmed: "1/30/2020"
  //     facility: "SAN LAZARO HOSPITAL"
  //     latitude: 14.61348
  //     longitude: 120.98095
  //     status: "Recovered"
  //     epi_link: " "
  //     petsa: "1/29/2020 16:00"
  //     statusColor: "background-color: #4CAF50; color:#FFF;"

  displayedColumns: string[] = ['id', 'nationality', 'residence', 'travel_history', 'status'];
  dataSource: MatTableDataSource<any>;

  @Input() patients;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit() {

    const patientList = 'patientList';
    console.log('patients', this.patients[patientList]);
    this.dataSource = new MatTableDataSource(this.patients[patientList]);
    this.dataSource.paginator = this.paginator;


    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'nationality': return item.attributes.nationalit;
        case 'residence': return item.attributes.residence;
        case 'id': return item.attributes.PH_masterl;
        case 'travel_history': return item.attributes.travel_hx;
        case 'status': return item.attributes.status;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;

  }

}

