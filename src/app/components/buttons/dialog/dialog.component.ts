import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ColumnFooType } from '../buttons.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {
  /*Creamos una variable auxiliar para no perder el
    valor del array enviado por el padre.*/
  aux:ColumnFooType[];

  /*Creamos una variable que será una referencia al
    modal e injectamos la información del padre en el modal */
  constructor(public dialogRef:MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:ColumnFooType[]) { }

  ngOnInit():void{
    /*Hacemos una copia del array enviado por el padre
      para poder modificarlo sin perder el valor del
      array enviado por el padre. */
    console.log(this.data);
    this.aux=[...this.data];
  }

  /*Metodo para cambiar el orden en el array del elemento
    seleccionado cada vez que hagas un Drag and Drop*/
  drop(e:CdkDragDrop<any>):void{
    moveItemInArray( this.aux , e.previousIndex, e.currentIndex);
  }

  //Metodo para cerrar el modal
  onNoClick():void{
    this.dialogRef.close(this.data);
  }

  //Metodo para guardar la información en el localStorage desde el modal
  save():void{
    localStorage.setItem('columns',JSON.stringify(this.aux));
    this.data = this.aux;
    this.onNoClick();
    //location.reload();
  }
}
