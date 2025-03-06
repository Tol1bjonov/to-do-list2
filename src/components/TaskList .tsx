import { Component } from "react";

interface Task {
    id: number;
    description: string;
    deadline: string;
    completed: boolean;
}

interface IProps {
    tasks: Task[];
    onToggleComplete: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
}

class TaskList extends Component<IProps> {
    render() {
        return (
            <ul >
                {this.props.tasks.map((task) => (
                    <li id="wrapper" key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.description} ({task.deadline})
                        <button id="cancel-btn" onClick={() => this.props.onToggleComplete(task.id)}>
                            {task.completed ? "Bajarildi✅" : "Bajarilmadi❌"}
                        </button>
                        <button id="delete-btn" onClick={() => this.props.onDeleteTask(task.id)}> O‘chirish🗑</button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default TaskList;
