import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-group-to-heroes',
  standalone: true,
  template: `
  <h2>Set a group to all heroes</h2>
  <p><em>Enter a group name
  <input type="text" [(ngModel)]="groupName" placeholder="Enter some group Name">
  <button (click)="onGroupNameUpdated()">Update Group Name</button>`,
  imports: [FormsModule]
})
export class SetGroupToHeroesComponent {
  groupName: string = '';

  @Output() groupNameUpdated = new EventEmitter<string>();

  onGroupNameUpdated() {
    this.groupNameUpdated.emit(this.groupName);
  }

}
