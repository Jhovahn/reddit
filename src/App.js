import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, input, getData } from './actions';
import List from './List';
import './App.css';

const mapStateToProps = state => {
  return {
    count: state.reducer.count,
    input: state.inputReducer.input,
    isPending: state.dataReducer.isPending,
    data: state.dataReducer.data,
    error: state.dataReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    inp: i => dispatch(input(i)),
    data: i => dispatch(getData(i))
  };
};

class App extends Component {
  constructor(props) {
    super();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.data(this.props.input);
  };

  handleUserInput = e => {
    this.props.inp(e.target.value);
  };

  render() {
    console.log('app', this.props);
    return (
      <div>
        {/*
        <button onClick={this.props.dec}>-</button>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.inc}>+</button>
        */}
        <form>
          <input onChange={e => this.handleUserInput(e)} />
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
        <List list={this.props.data} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
