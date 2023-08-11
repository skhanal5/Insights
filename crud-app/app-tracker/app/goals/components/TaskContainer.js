'use client'

import { useState } from "react"
import TaskCell from "./TaskCell"

export default function TaskContainer() {
    const taskData = [
        {description: "This is task one", state: "To-do"},
        {description: "This is task one", state: "In Progress"},
        {description: "This is task one", state: "Complete"},
        {description: "This is task one", state: "Overdue"},
        {description: "This is task one", state: "To-do"},
        {description: "This is task one", state: "In Progress"},
        {description: "This is task one", state: "Complete"},
        {description: "This is task one", state: "Overdue"}
    ]
    
    return (
        <div className="mt-5 flex flex-col gap-2 overflow-scroll">
            {taskData.map((taskData, taskIndex) => (
                <TaskCell key={taskIndex} description={taskData.description} state={taskData.state}></TaskCell>
            ))}
        </div>
    )
}