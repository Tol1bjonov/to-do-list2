import { Component } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList ";

interface Task {
    id: number;
    description: string;
    deadline: string;
    completed: boolean;
}

interface IState {
    tasks: Task[];
}

class TaskManager extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
        };
    }

    componentDidUpdate() {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }

    addTask = (description: string, deadline: string) => {
        const newTask: Task = {
            id: Date.now(),
            description,
            deadline,
            completed: false
        };
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, newTask]
        }));
    };

    toggleTaskCompletion = (taskId: number) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        }));
    };

    deleteTask = (taskId: number) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== taskId)
        }));
    };

    render() {
        return (
            <div>
                <h1>Task Manager</h1>
                <TaskForm onAddTask={this.addTask} />
                <TaskList tasks={this.state.tasks} onToggleComplete={this.toggleTaskCompletion} onDeleteTask={this.deleteTask} />
            </div>
        );
    }
}

export default TaskManager;
