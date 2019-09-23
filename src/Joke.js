import React from "react";

class Joke extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleVoteDown = this.handleVoteDown.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
  }

  handleVoteDown(e) {
    e.preventDefault();
    this.props.voteDown(this.props.id);
  }

  handleVoteUp(e) {
    e.preventDefault();
    this.props.voteUp(this.props.id);
  }

  render() {

    console.log('hello');
    return (
      <div>
        {this.props.joke}
        <button onClick={this.handleVoteUp}>
          <img className="vote" alt='thumbs up' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/thumbs-up-sign_1f44d.png">
          </img></button>
        <button onClick={this.handleVoteDown}>
          <img className="vote" alt='thumbs down' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/thumbs-down-sign_1f44e.png">
          </img></button>
        {this.props.score}
      </div>
    )
  }
}

export default Joke;
