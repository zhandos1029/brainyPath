import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OrganizationControlCard} from "./organization-control-cards";


@Component({
    selector: 'app-organization-cards',
    templateUrl: './organization-cards.component.html',
    styleUrls: ['./organization-cards.component.scss']
})
export class OrganizationCardsComponent implements OnInit {
    @Input() organizationControlCards: OrganizationControlCard[];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }
}
