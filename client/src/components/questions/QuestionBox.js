import React, { Fragment } from 'react';
import '../../App.css';

const QuestionBox = () => {
  return (
    <Fragment>
      <div className='questionBoxContainer'>
        <div className='questionBoxLeftPane'>
          <h4>What is Pie?</h4>
          <p>what is pie what is pie what is pie what is pie what is pie...</p>
        </div>
        <div className='questionBoxRightPane'>
          <div>
            <b>
              <p>2</p>
            </b>
            <b>
              <p>Answers</p>
            </b>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuestionBox;
