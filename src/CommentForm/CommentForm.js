import React, {Component} from 'react';
import './CommentForm.css';

class CommentForm extends Component {
  render () {
    return (
      <div className="CommentForm">
        <textarea className="commentInput" placeholder="Enter your comment here"/>
        <input type="button" value="Submit comment"/>
      </div>
    );
  }
}

export default CommentForm;
