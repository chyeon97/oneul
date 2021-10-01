package com.onuel.todolist.repository

import org.springframework.boot.context.properties.bind.DefaultValue
import java.util.*
import javax.persistence.*

@Entity
class Todo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false)
    var completed:Int,

    @Column(nullable=false)
    var todoName:String,

    @Column(nullable = false)
    var dueDate:Date,

    @Column(nullable =  true)
    var endDate:Date? = null,
)