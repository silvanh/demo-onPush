import { Component } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { SalesTaxComponent } from './sales-tax.component';
import { SetGroupToHeroesComponent } from "./set-group-to-heroes.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Architecture Example</h1>
    <app-hero-list [groupName]="groupName"></app-hero-list>
    <app-set-group-to-heroes (groupNameUpdated)="updateGroupName($event)"></app-set-group-to-heroes>
  `,
  imports: [HeroListComponent, SalesTaxComponent, SetGroupToHeroesComponent]
})
export class AppComponent {
  groupName: string = '';
  updateGroupName($event: string) {
    this.groupName = $event;
  }
}
