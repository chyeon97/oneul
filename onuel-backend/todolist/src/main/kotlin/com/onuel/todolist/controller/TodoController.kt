package com.onuel.todolist.controller

import com.onuel.todolist.service.TodoService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/todo")
class TodoController(
    private val todoService: TodoService
) {
    @GetMapping
    fun getTodos() = todoService.getTodos()

    @PostMapping
    fun insertTodo(@RequestBody todoRequest: TodoRequest) = todoService.insertTodo(todoRequest.todoName, todoRequest.completed, todoRequest.dueDate)

    @PutMapping(path=["/{todoId}"])
    fun updateTodo(@PathVariable("todoId") todoId:Long, @RequestBody todoRequest: TodoRequest) = todoService.updateTodo(todoId, todoRequest.completed, todoRequest.todoName, todoRequest.dueDate, todoRequest.endDate)

    @DeleteMapping(path=["/{todoId}"])
    fun deleteTodo(@PathVariable("todoId") todoId:Long) = todoService.deleteTodo(todoId)

}