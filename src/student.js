import React from "react";

const Student = props => {
  return (
    <div>
      <p> Result {props.counter}</p>
      {props.question.map((item, index) => (
        <div>
          <p>
            {index + 1}.{item.question}
          </p>
          <form>
            {item.choice.map(choices => (
              <div>
                {/* <button
                onClick={() => {
                  props.countcorrectanswer(choices, index);
                }}
              >
                {choices}
              </button> */}

                <div>
                <input type="radio" id="index" name="item" value="male" onClick={() => {
                        props.countcorrectanswer(choices, index);
                      }}/>   {choices}
                   
               
                </div>
              </div>
            ))}
          </form>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              props.showanswer(index);
            }}
          >
            show answer
          </button>
          <p id={`showans${index}`}></p>
        </div>
      ))}
    </div>
  );
};

export default Student;
