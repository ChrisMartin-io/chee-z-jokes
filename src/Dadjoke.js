import React from "react";
import axios from 'axios';
import Joke from './Joke';

class Dadjoke extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: true
    };

    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  async componentDidMount() {

    let pageNum = Math.floor(Math.random() * 55);
    let response = await axios.get(
      `https://icanhazdadjoke.com/search?limit=10&page=${pageNum}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    this.setState({ loading: false })
    this.setState({ jokes: response.data.results.map(joke => ({ ...joke, score: 0 })) })
  }

  voteUp(id) {
    this.setState(st => ({
      jokes: st.jokes.map((joke) => {
        if (joke.id === id) {
          return { ...joke, score: joke.score + 1 }
        }
        return joke;
      })
    }))
  }

  voteDown(id) {
    this.setState(st => ({
      jokes: st.jokes.map((joke) => {
        if (joke.id === id) {
          return { ...joke, score: joke.score - 1 }
        }
        return joke;
      })
    }))
  }


  render() {

    return (
      this.state.loading ? <p>Loading...</p> :
      <div>
        {this.state.jokes.map((joke) => (
          <Joke
            joke={joke.joke}
            score={joke.score}
            key={joke.id}
            id={joke.id}
            voteUp={this.voteUp}
            voteDown={this.voteDown}
          />))}
      </div>
    )
  }
}

export default Dadjoke;