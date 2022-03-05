import React from "react";
import { ReactDOM } from "react";

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {hello : "World!"};
    }

    componentDidMount(){
        console.log("componentWillMount()");
    }

    componentDidMount(){
        console.log("componentDidMount()");
    }

    changeState(){
        this.setState({hello : "Geek!"});
    }

    render()
    {
        return(
            <div>
                <h1>GeeksForGeeks.org, hello {this.state.hello} </h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Press here!</a>
                </h2>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate()");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }
}

export default Test;

// ReactDOM.render(
//     <Test/>, document.getElementById('root'));