import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit  } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { ColumnFooType } from '../buttons/buttons.component';
import { GroupDescriptor, process, DataResult } from "@progress/kendo-data-query";

export interface GridSettings {
  columnsConfig: ColumnFooType[];
  gridData: Products[];
}

export interface Products {
  id: number,
  cliente: string,
  telefono: number,
  segmento: number,
  movil: number,
  reserva: Date,
}
@Component({
  selector: 'app-rej',
  templateUrl: './rej.component.html',
})
export class RejComponent implements OnInit, AfterViewInit {

  /* Realizamos un Input para que le padre le pase el
     array de categories.
     Realizamos un Output para pasarle, el GridComponent,
     al padre.
     Realizamos un ViewChild para poder emitir, el GridComponent,
     al padre desde el ngAfterViewInit*/
  @Input() categories:ColumnFooType[] = [];
  @Output() newItemEvent = new EventEmitter<GridComponent>();
  @ViewChild("grid") gridComp!: GridComponent;


  /* Creamos 2 variables.
    Una de ellas serán los datos de la columna (sampleProducts).
    Y la otra de ellas será la configuración del grid.*/
  sampleProducts:Products[] = [
  {
    id: 1,
    cliente: "Chai",
    telefono: 610827166,
    segmento: 8,
    movil: 610827196,
    reserva: new Date()
  },
  {
    id: 2,
    cliente: "Nao",
    telefono: 610727166,
    segmento: 8,
    movil: 614827196,
    reserva: new Date(22,1,2)
  }];

  gridSettings: GridSettings = {
    gridData: this.sampleProducts,
    columnsConfig: this.categories,
  };

  /* Creamos otras 2 variables.
    Una de ellas serán los grupos, por lo que será filtrado.
    Y la otra de ellas será el resultado de esa filtración.*/
  public groups: GroupDescriptor[] = [];
  public gridView: DataResult;

  ngOnInit(): void {
    this.loadProducts();
    const savedGroups: GroupDescriptor[] = JSON.parse(localStorage.getItem("groups"));
    if (savedGroups) {
      this.groups = savedGroups;
    }
  }

  /*Metodo que emite el GridComponent al padre
    cada vez que termine de visualizadlo todo
    el componente*/
  ngAfterViewInit(): void {
    this.newItemEvent.emit(this.gridComp);
  }

  /*Metodo que emite el GridComponent al padre
    cada vez que se ordenan las columnas del grid.*/
  saveInGrid(e:GridComponent){
    this.newItemEvent.emit(e);
  }

  /*Metodo que actualiza los grupos para filtrar la información al notar un cambio en el grupo*/
  groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.loadProducts();
    localStorage.setItem("groups",JSON.stringify(this.groups));
  }

  /*Metodo para actualizar los grupos para filtrar la información*/
  loadProducts(): void {
    this.gridView = process(this.groups, { group: this.groups });
  }

}
