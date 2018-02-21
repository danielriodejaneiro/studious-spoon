import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoInactiveComponent} from './todo-inactive/todo-inactive.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {TodosService} from './todos.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoInactiveComponent,
    TodoDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
