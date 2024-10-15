import { Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
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
export class SetGroupToHeroesComponent implements DoCheck /*, OnInit */{
  groupName: string = '';

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  @Output() groupNameUpdated = new EventEmitter<string>();

  // ngOnInit() {
  //   this.renderer.listen(this.el.nativeElement, 'mousemove', (event: MouseEvent) => {
  //     console.log('mouse moved');
  //   });
  // }

  ngDoCheck(): void {
    console.count('group name component update');
  }

  onGroupNameUpdated() {
    this.groupNameUpdated.emit(this.groupName);
  }



}
