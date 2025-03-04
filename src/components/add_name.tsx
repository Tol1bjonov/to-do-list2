import { Component } from "react";

interface IProps {
  name: string;
}

interface IState {
  name_fill: string;
  index: number;
}

class Add_name extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name_fill: "",
      index: 0,
    };
  }

  handleName = () => {
    if(this.state.index < this.props.name.length){
        this.setState((i)=>({
            name_fill: i.name_fill + this.props.name[i.index],
            index: i.index +1 
        }))
    }
  };

  render() {
    return (
      <>
        <h1>Hello, My Name Is {this.props.name}</h1>
        <h3>Click this button to fill my name: {this.state.name_fill}</h3>
        <button onClick={this.handleName}>Click me</button>
      </>
    );
  }
}

export default Add_name;
