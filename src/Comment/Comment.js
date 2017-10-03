import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
  render () {
    return (
      <div className="Comment">
        <div className="title">
          <b>{this.props.title}</b>
        </div>
        <div className="content">
          {this.props.comment}
        </div>
      </div>
    );
  }
}

export default Comment;
