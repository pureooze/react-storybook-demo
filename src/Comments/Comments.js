import React, {Component} from 'react';
import './Comments.css';
import Comment from '../Comment/Comment'


class Comments extends Component {
  render () {
    let comments = this.props.comments;
    let commentsList = [];

    if(comments){
      commentsList = this.props.comments.map(function (comment, index) {
        return <Comment comment={comment.comment} title={comment.title}/>
      })
    } else {
      commentsList = "Be the first to enter a comment!"
    }

    return (
      <div className="Comments">
        {commentsList}
      </div>
    );
  }
}

export default Comments;
