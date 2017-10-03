import React, {Component} from 'react';
import './App.css';
import Comments from './Comments/Comments'
import CommentForm from './CommentForm/CommentForm'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Comments</h1>
        <CommentForm />
        <Comments comments={this.props.comments}/>
      </div>
    );
  }
}

export default App;
