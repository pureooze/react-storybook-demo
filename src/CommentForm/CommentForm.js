import React, {Component} from 'react';
import './CommentForm.css';

class CommentForm extends Component {


  render () {

    function addComment() {
      var obj = {
        title: 'My Title', comment: 'Did this work'
      }

      this.props.comments.push(obj)


    }

    return (
      <div>
        <img className="speech-bubble" width="5%" height="5%" src="http://moziru.com/images/message-clipart-bubble-3.png" alt="Speech-bubble-graphic"/>
        <div className="CommentForm">
          <div className="comment-name">
            <label>Name: </label> <input type="text" name="username" className="comment-input"/>
          </div>
          <div >
            <textarea className="comment-input" placeholder="Enter your comment here"/>
            <input type="button" value="Submit" onClick={addComment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
