import React from 'react';

import './Counter.scss';

class Counter extends React.Component {
    constructor() {
        super();
        this.handlerInc = this.handlerInc.bind(this);
        this.handlerDec = this.handlerDec.bind(this);
        this.state = {
            count : 0
        }
    }

    handlerInc() {
        this.setState({
            count :  ++this.state.count
        })
    }

    handlerDec() {
        this.setState({
            count :  --this.state.count
        })
    }

    render() {
        return (
            <div className="counter">
                <span>Counter equals {this.state.count}</span>
                <button value={this.state.count} onClick={this.handlerInc} className="counter-btn">Inc</button>
                <button value={this.state.count} onClick={this.handlerDec} className="counter-btn">Dec</button>
            </div>
        )
    }
}

export default Counter;