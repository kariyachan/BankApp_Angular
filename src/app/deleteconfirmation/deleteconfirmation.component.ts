import { Component, Input, OnInit ,  EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-deleteconfirmation',
  templateUrl: './deleteconfirmation.component.html',
  styleUrls: ['./deleteconfirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {

  @Input() item:string|undefined

  @Output() onDelete = new EventEmitter()        //october 1 1:40:40
  @Output() onCancel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.item)    //emit = event occure
  }

  cancel(){
    this.onCancel.emit()   //oct 3 1:32:32
  }
}
