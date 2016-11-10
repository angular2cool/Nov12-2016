import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app',
    providers: [DataService],
    templateUrl: 'app.template.html'
})
export class AppComponent {
    salesData: SalesData[];
    constructor(dataService: DataService) {
        this.salesData = new Array<SalesData>();
        dataService.getDataObservable('/api/ProductSales/ForSku/AMM-223').subscribe(x => {
            let d = JSON.parse(JSON.stringify(x));
            this.salesData.push(new SalesData(d.date, d.revenue, d.unitSales));
            console.log(this.salesData);
        });
    }
}

class SalesData {
    constructor(public date: Date, public revenue: number, public unitSales: number) { }
}
