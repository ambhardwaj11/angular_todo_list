import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:Todo[];
  localItem:string;

  constructor() { 
    this.localItem=localStorage.getItem("todo")
    if(this.localItem === null){
      this.todo=[]
    }else{
       this.todo= JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todo.indexOf(todo)
    this.todo.splice(index,1)
    localStorage.setItem("todo", JSON.stringify(this.todo))
  }
  AddtTodo(todo:Todo){
    console.log(todo)
    this.todo.push(todo)
    localStorage.setItem("todo", JSON.stringify(this.todo))
  }

   

}
