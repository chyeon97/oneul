package com.onuel.todolist.controller

import java.util.*

data class TodoRequest (val todoName: String, val completed:Int, val dueDate: Date, val endDate: Date?)