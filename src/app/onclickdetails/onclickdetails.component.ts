import { Component, OnInit, Input} from '@angular/core';
import { MyvehicalserveService } from '../myvehicalserve.service';

@Component({
  selector: 'app-onclickdetails',
  templateUrl: './onclickdetails.component.html',
  styleUrls: ['./onclickdetails.component.css']
})
export class OnclickdetailsComponent implements OnInit {

    jsonProductList: any;
  order: boolean = true;
  selCar: any;
  selCarName: any;
  selCarDesc: any;
  item: any;
  @Input() sort: any;
  appFetchDataSvc: MyvehicalserveService;

  constructor(fetchDataSvc: MyvehicalserveService) {
    this.appFetchDataSvc = fetchDataSvc;
    this.getDataFromServer(fetchDataSvc);

  }

  ngOnInit() {
  }

  clicked(event) {
    console.log(this.jsonProductList[event].desc);
    this.selCarName = this.jsonProductList[event].name;
    this.selCarDesc = this.jsonProductList[event].desc;

  }


  getDataFromServer(appFetchDataSvc: MyvehicalserveService) {
    appFetchDataSvc.getListOfProducts().subscribe((result) => { console.log(this.jsonProductList = result.dealerveh) },
      error => {
        console.log("ERROR in code");
      });
  }
  changeSorting(colNm): void {
    console.log("this is test");
    this.jsonProductList.sort(sortByProperty(colNm, this.order));
    this.order = !this.order;



  }


}
var sortByProperty = function (property, order) {

  return function (x, y) {

    if (order == true) {

      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? -1 : 1));

    }
    else {

      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));

    }
  };


};



