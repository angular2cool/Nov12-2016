import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app',
    providers: [DataService],
    templateUrl: 'app.template.html'
})
export class AppComponent {
    constructor(dataService: DataService) {
        dataService.getDataObservable('/api/ProductSales/ForSku/AMM-223').subscribe(x => {
            console.log('just got: ' + x);
        });
    }
}
