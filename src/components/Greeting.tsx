import { Component } from "react"
//bu props
interface IProps{
    name: string
}
//bu state, componentning xotirasi
interface IState{
    age: number
}



class Greeting extends Component<IProps,IState>{
    //bu props
    constructor (props: IProps){
        super(props)
    }
    //state uchun boshlangich qiymat
    state={
        age:42
    }
    //state uchun handle function
    handleClick=()=>{
        this.setState({
            age: this.state.age+1
        })
    }
    render(){
        return(
            <><h1>Hello {this.props.name}!</h1>
            <h2>You are {this.state.age} years old!</h2>
            <button onClick={this.handleClick}>Increment age: {this.state.age}</button>
            </>
        )
    }
}
export default Greeting