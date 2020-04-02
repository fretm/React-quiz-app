import React from "react";
import "./App.css";
import Student from "./student";
import Mynav from './components/NavBar'
class App extends React.Component {
  state = {
    questions: [
      {
        question: "what is your name ?",
        choice: ["fre", "bk", "sm", "all"],
        answer: "fre",
        ansflag: false,
        showflag: true
      },
      {
        question: "how old are you ?",
        choice: [34, 12, 78, 45],
        answer: 12,
        ansflag: false,
        showflag: true
      },
      {
        question: "what is your first pet  ?",
        choice: ["booby", "booboo", "tatiyana", "all"],
        answer: "booboo",
        ansflag: false,
        showflag: true
      }
    ],
    counter: 0
  };

  countcorrectanswer = (choice, index) => {
    let copydata = [...this.state.questions];
    let copycounter = this.state.counter;
    copycounter = this.state.counter + 1;

    if (
      choice === copydata[index].answer &&
      copydata[index].ansflag === false
    ) {
      copydata[index].ansflag = true;
      this.setState({ counter: copycounter, questions: copydata });
    }
  };

  showanswer = index => {
    let copydata = [...this.state.questions];

    let copyofanswer = copydata[index].answer;
    let copyofansflag = copydata[index].showflag;

    if (copyofansflag) {
      document.getElementById(`showans${index}`).innerHTML = copyofanswer;
      copydata[index].showflag = false;
    } else {
      document.getElementById(`showans${index}`).innerHTML = null;
      copydata[index].showflag = true;
    }
    this.setState({ questions: copydata });
  };
  render() {
    return (
      <div className="container">

<Mynav>

</Mynav>
        <Student
          countcorrectanswer={this.countcorrectanswer}
          question={this.state.questions}
          counter={this.state.counter}
          showanswer={this.showanswer}
          answer={this.state.questions}
        >
          {" "}
        </Student>
      </div>
    );
  }
}

export default App;
