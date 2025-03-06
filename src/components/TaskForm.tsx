import { Component } from "react";

interface IProps {
    onAddTask: (description: string, deadline: string) => void;
}

interface IState {
    description: string;
    deadline: string;
}

class TaskForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            description: "",
            deadline: "",
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as unknown as IState);
    };

    handleSubmit = () => {
        if (!this.state.description || !this.state.deadline) return;
        this.props.onAddTask(this.state.description, this.state.deadline);
        this.setState({ description: "", deadline: "" });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="description"
                    placeholder="Vazifa nomi"
                    value={this.state.description}
                    onChange={this.handleChange}
                    id="description"
                />
                <input
                    type="date"
                    name="deadline"
                    value={this.state.deadline}
                    onChange={this.handleChange}
                    id="deadline"
                />
                <button 
                id="form-button"
                onClick={this.handleSubmit}
                >Qo‘shish</button>
            </div>
        );
    }
}

export default TaskForm;
