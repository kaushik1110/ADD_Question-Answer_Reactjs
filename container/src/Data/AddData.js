import React, { useState } from "react";
import "./AddData.css";

import { Accordion, Card, Button } from "react-bootstrap";
const AddData = () => {
  const [data, setData] = useState({
    question: "",
    answer: "",
    detail: [],
    questionError: "",
    answerError: "",
  });
  const submitHandler = () => {
    console.log("que:->", data.question);
    console.log("ans:->", data.answer);
    if (data.question === "" && data.answer === "") {
      setData({
        questionError: "Enter your question",
        answerError: "please enter your answer",
      });
      console.log("all");
    } else if (data.question === "" && data.answer === undefined) {
      setData({
        questionError: "Enter your question",
        answerError: "please enter your answer",
      });
    } else if (data.answer === "" && data.question === undefined) {
      setData({
        questionError: "Enter your question",
        answerError: "please enter your answer",
      });
    } else if (data.question === "" || data.question === undefined) {
      setData({
        questionError: "please enter your question",
      });
      console.log("que");
    } else if (data.answer === "" || data.answer === undefined) {
      setData({
        answerError: "please enter your answer",
      });
      console.log("ans");
    } else {
      setData({
        detail: [
          ...data.detail,
          {
            id: Math.floor(Math.random() * 100),
            question: data.question,
            answer: [data.answer],
          },
        ],
      });
    }
  };

  const submitAnswerHandler = (event) => {
    event.preventDefault();
    setData({
      ...data,
      ...data.detail,
      detail: [
        {
          ...data.detail[0],
          ...data.detail[0].question,
          answer: [...data.detail[0].answer, data.answer],
        },
      ],
    });
  };

  const changeHandler = (event) => {
    console.log("datadetail", data.detail);
    setData({
      ...data,
      [event.target.name]: event.target.value,
      questionError: "",
      answerError: "",
    });
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add Data
      </button>
      <br />
      {data &&
        data.detail &&
        data.detail.map((item) => (
          <div>  
            <Accordion>  
              {item && console.log("iiii", item)}
              <Card key={item.id}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {item.question}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {item.answer.map((answer, index) => (
                      <Card.Body>
                        <div>
                          {index + 1} {answer}
                        </div>
                      </Card.Body>
                    ))}
                    <button
                      className=""
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      data-whatever=""
                    >
                      add new
                    </button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        ))}

      {/* Question & answer input*/}
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                QuesAns
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="col-form-label">Question :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="question"
                    onChange={changeHandler}
                  />
                  <div className="error">{data.questionError}</div>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Answer :</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="answer"
                    onChange={changeHandler}
                  />
                  <div className="error">{data.answerError}</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitHandler}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Answer input*/}
      <div
        className="modal fade"
        id="exampleModal1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                QuesAns
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="col-form-label">Answer :</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="answer"
                    onChange={changeHandler}
                  />
                  <div className="error">{data.answerError}</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitAnswerHandler}
              >
                Add Answer
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
