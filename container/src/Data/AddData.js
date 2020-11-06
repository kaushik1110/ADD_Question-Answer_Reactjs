import React, { useState } from "react";
const AddData = () => {
  const [data, setData] = useState({
    question: "",
    answer: "",
    detail: [],
  });
  const submitHandler = () => {
    setData({
      detail: [
        {
          id: Math.floor(Math.random() * 100),
          question: data.question,
          answer: data.answer,
        },
      ],
    });
    // events.preventDefault();
    // setData({
    //     ...data,
    //   [events.target.name]: events.target.value,
    // });
  };
  console.log(data.detail);

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  console.log(data);

  return (
    <div>
      <lable>Question</lable>
      <input type="text" name="question" onChange={changeHandler}></input>

      <lable>Answer</lable>
      <input type="text" name="answer" onChange={changeHandler}></input>
      <button type="button" class="btn btn-primary" onClick={submitHandler}>
        Add Data
      </button>
      <br />
      {data &&
        data.detail &&
        data.detail.map((item) => (
          <li key={item.id}>
            Question : {item.question} Answer: {item.answer}
          </li>
        ))}
      {/* <lable>Question</lable>
      <p>{data.question ? data.question :  ""}</p>
      <lable>Answer</lable>
      <p>{data.answer ? data.answer :  ""}</p> */}

      {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="">Add Data</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Question:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Answer:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}
    </div>
  );
};

export default AddData;
