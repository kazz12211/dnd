import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {

  items: string[] = ['item 1 of box2', 'item 2 of box2', 'item 3 of box2', 'item 4 of box2', 'item 5 of box2'];

  constructor() { }

  ngOnInit() {
  }

  connectedTo(): string[] {
    return ['box1'];
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
