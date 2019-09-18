import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {

  items: string[] = ['item 1 of box1', 'item 2 of box1', 'item 3 of box1', 'item 4 of box1', 'item 5 of box1'];

  constructor() {
   }

  ngOnInit() {
  }

  connectedTo(): string[] {
    return ['box2'];
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  entered(event: CdkDragEnter<string[]>) {
    console.log(event);
  }

  exited(event: CdkDragExit<string[]>){
    console.log(event);
  }
}
