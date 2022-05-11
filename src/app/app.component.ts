import { Component } from '@angular/core';
import { ColumnFooType } from './components/buttons/buttons.component';
import { GridComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent{
  title = 'Reorder';

  //Creamos el array de los titulos de las columnas para el grid
  categories:ColumnFooType[]=[
    {
      field:'reserva',
      title:'Reserva'
    },
    {
      field:'id',
      title:'ID'
    },
    {
      field:'cliente',
      title:'Cliente'
    },
    {
      field:'movil',
      title:'Movil'
    },
    {
      field:'segmento',
      title:'Segmento'
    },
    {
      field:'telefono',
      title:'Telefono'
    }
  ];

  //Creamos la variable que recibirá el GridComponent del RejComponent
  grid:GridComponent;

  //Pasamos el grid del hijo RejComponent al padre
  addItem(e:GridComponent){
    this.grid=e;
  }

  //Pasamos el array de categorias del hijo ButtonsComponent al padre
  addItem1(e:ColumnFooType[]){
    this.categories=e;
  }
}
