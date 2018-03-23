// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


let count = 0;
const heads = <div>xixi</div>

class House extends Component {
    static defaultProps = {
        test:'lalala'
    }

    constructor(){
        super();
        this.state = {counts:0}
    }

    knock(){
        console.log("knock")
        this.setState({
            counts:count
        });
        count++
    }

    render(){
        return (
            <div onClick={this.knock.bind(this)}>
                {this.props.test}
                {this.state.counts}
                <Room/>
            </div>
        )
    }
}

class Room extends Component {
    render(){
        return(
            <div>
                Room
                <Bathroom/>
            </div>
        )
    }
}

class Bathroom extends Component {
    render(){
        return(
            <div>
                Bathroom
                <Man/>
            </div>
        )
    }
}

class Man extends Component {
    render(){
        return(
            <div>
                Man
                <Dog/>
            </div>
        )
    }
}

class Dog extends Component {
    render(){
        return(
            <div>
                Dog
            </div>
        )
    }
}

function test(info) {
    class Header extends Component {
        render () {
            return (
                <div>
                    <h1>{
                    count > 0
                        ?'有'+count+'条未读消息'
                        :'没有未读消息'
                    }</h1>
                    {heads}
                    <House test="xixixixixi" />
                </div>
            )
        }
    }

    ReactDOM.render(
        <Header />,
        document.getElementById('root')
    )
}

test('test');

