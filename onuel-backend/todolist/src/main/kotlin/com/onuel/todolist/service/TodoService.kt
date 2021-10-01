package com.onuel.todolist.service

import com.onuel.todolist.repository.Todo
import com.onuel.todolist.repository.TodoRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.util.*

@Service
class TodoService(
    private val todoRepository: TodoRepository
) {
    //조회
    fun getTodos() = todoRepository.findAll()

    //추가
    fun insertTodo(todoName:String, completed:Int, dueDate:Date):Todo = todoRepository.save(Todo(todoName = todoName, completed= completed, dueDate = dueDate))

    //상태 업데이트
    fun updateTodo(todoId:Long, completed: Int, todoName:String, dueDate: Date, endDate:Date?): Todo {
        // todoId 있는지 조회 후 있으면 complete처리, 아니면 에러 발생
        val todo = todoRepository.findByIdOrNull(todoId) ?: throw Exception()
        todo.completed = completed
        todo.todoName = todoName
        todo.dueDate = dueDate
        todo.endDate = endDate

        return todoRepository.save(todo)
    }
    //삭제
    fun deleteTodo(todoId:Long) = todoRepository.deleteById(todoId)
}