import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ColumnBase, GridComponent } from '@progress/kendo-angular-grid';
import { isThisTypeNode } from 'typescript';

export interface ColumnFooType {
  field: string;
  title?: string;
  orderIndex?: number;
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
  /*Realizamos un Input para que le padre le pase el
    array de categories.
    Realizamos un Input para que le padre le pase el
    elemento GridComponent.
    Realizamos un Output para pasarle, el array de categories,
    al padre.*/
  @Input() categories: ColumnFooType[] = [];
  @Input() grid: GridComponent;
  @Output() nuevo = new EventEmitter<ColumnFooType[]>();

  /*Creamos una variable auxiliar para no perder el
  valor del array enviado por el padre.*/
  aux:ColumnFooType[];

  constructor(public dialog:MatDialog) { }

  ngOnInit():void{
    /*Hacemos una copia del array enviado por el padre
      para poder modificarlo sin perder el valor del
      array enviado por el padre. */
    this.aux = [...this.categories];
  }

  //Metodo para abrir el modal de angular.
  openDialog():void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.aux
    });

    dialogRef.afterClosed().subscribe(result => {
      this.aux = result;
      this.nuevo.emit(this.aux);
    });
  }

  //Metodo para guardar en el localStorage desde el botón Guardar
  save(e:GridComponent):void{
    const columns: ColumnBase[] = e.columns.toArray();

    const orderColumns: ColumnBase[] = columns.sort(
      (a,b) => a.orderIndex - b.orderIndex
    );

    const restructuredColumns: ColumnFooType[] = orderColumns.map((col)=> {
      const column: ColumnFooType ={
        field: col["field"],
        title: col["title"],
      };
      return column;
    });

    localStorage.setItem("columns",JSON.stringify(restructuredColumns));
  }

  //Metodo para cargar la información del localStorage desde el botón Cargar
  load():void{
    const savedColumns: ColumnFooType[] = JSON.parse(localStorage.getItem("columns"));
    if (savedColumns) {
      this.nuevo.emit(savedColumns);
    }
  }
}
