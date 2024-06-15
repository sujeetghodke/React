import React, { Component } from "react";

export default class ClassDemo extends Component {
  constructor() {
    super();
    this.state = {
      fname: "peter",
      name: "",
      count: 0,
      like: 0,
      names: [
        "Peter parker",
        "Thor Odinson",
        "Dr. Strange",
        "Iron Man",
        "Thanos",
        "Loki",
        "captain America",
        "Hulk",
        "Batman",
        "Superman",
      ],
      show: function () {
        console.log("This is show method here");
      },
    };
  }
  fname = "pppp";
  handleCount() {
    this.setState((state) => ({
      count: state.count + 2,
    }));
  }
  handleLikes() {
    this.setState((state) => ({
      name: this.state.names[this.state.like],
      like: state.like + 1,
    }));
    console.log(this.state.like);
  }

  render() {
    return (
      <>
        <h1>Class Demo Component</h1>
        <p>The name is {this.state.name}</p>
        <p>{this.fname}</p>
        <p>{this.state.show()}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleCount()}>Counter</button>
        <hr />
        <p>
          Indian festivals are a vibrant tapestry of cultural and religious
          celebrations that reflect the country's rich heritage and diversity.
          From the lights and joy of Diwali, symbolizing the triumph of good
          over evil, to the colorful exuberance of Holi, marking the arrival of
          spring, each festival is steeped in traditions and rituals. Eid,
          Christmas, and Guru Nanak Jayanti highlight India's secular spirit,
          bringing communities together in unity and harmony. Festivals like
          Durga Puja, Navratri, and Pongal showcase regional uniqueness,
          offering a glimpse into the varied customs and practices across
          states. These celebrations, filled with music, dance, feasts, and
          prayers, create an atmosphere of joy and togetherness, strengthening
          the bonds among family and friends while preserving the cultural
          essence of India.
        </p>
        <p>Number of people liked this content:{this.state.like}</p>
        <p>Recently liked by {this.state.name}</p>
        <button onClick={() => this.handleLikes()}>Like</button>

        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Counter</button> */}
      </>
    );
  }
}
