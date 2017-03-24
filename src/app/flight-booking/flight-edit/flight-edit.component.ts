import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
        <h1>Flight Edit</h1>
        <p>Id: {{id}}, ShowDetails: {{ showDetails }}</p>
    `
})
export class FlightEditComponent implements OnInit {

    id: string;
    showDetails: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.showDetails = p['showDetails'];
        });
    }

}