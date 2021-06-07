import React, { Fragment } from 'react';
import '../../App.css';
import QuestionBox from './QuestionBox';

const Question = () => {
  return (
    <Fragment>
      <div className='questionNav'>
        <h4 className='questionTitle'>Questions</h4>
        <div className='Questionbuttons'>
          <button className='questionNavButton'>Newest</button>

          <button className='questionNavButton'>Top View</button>

          <button className='questionNavButton'>Not Answered</button>
        </div>
      </div>
      <div className='questionBody'>
        <QuestionBox />
        <br></br>
        <QuestionBox />
        <br></br>
        <QuestionBox />
        <br></br>
        <QuestionBox />
        <br></br>
        <QuestionBox />
      </div>
    </Fragment>
  );
};

export default Question;
