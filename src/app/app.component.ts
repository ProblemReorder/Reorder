import { Component, OnInit } from '@angular/core';
import { ColumnFooType } from './components/buttons/buttons.component';
import { GridComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

  //Creamos la variable que recibirá el GridComponent
  grid:GridComponent;

  constructor(){
    localStorage.setItem("columnsOrg",JSON.stringify(this.categories));
  }

  ngOnInit(){
    const savedColumnsOrg: ColumnFooType[] = JSON.parse(localStorage.getItem("columnsOrg"));
    if (savedColumnsOrg) {
      this.categories = savedColumnsOrg;
    }
  }

  //Pasamos el grid del hijo GridComponent al padre
  addItem(e:GridComponent){
    this.grid=e;
  }

    //Pasamos el grid del hijo GridComponent al padre
    addItem1(e:ColumnFooType[]){
      this.categories=e;
    }
}
