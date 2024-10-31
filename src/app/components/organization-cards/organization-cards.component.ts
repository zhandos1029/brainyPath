// organization-cards.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { OrganizationControlCard } from "./organization-control-cards";

@Component({
    selector: 'app-organization-cards',
    templateUrl: './organization-cards.component.html',
    styleUrls: ['./organization-cards.component.scss']
})
export class OrganizationCardsComponent implements OnInit {
    @Input() organizationControlCards: OrganizationControlCard[];
    selectedRoute: string;
    isModalOpen = false;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    openModal(route: string): void {
        this.selectedRoute = route;
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }

    navigateToGrade(grade: number): void {
        // this.router.navigate([`${this.selectedRoute}/${grade}`]);
        this.router.navigate([`/sub`]);
    }
}
