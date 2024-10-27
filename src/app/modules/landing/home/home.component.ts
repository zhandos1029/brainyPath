import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    styles       : [`
        .color {
            color: var(--fuse-primary);
        }
    `]
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
