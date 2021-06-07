import React, { Fragment, useState } from 'react';
import '../../App.css';

import Question from '../questions/Question';

const Home = () => {
  const [isGradeActive, setGradeActive] = useState({ grade: '', state: false });
  const [isSubjectActive, setSubjectActive] = useState({
    subject: '',
    state: false,
  });
  const gradeList = ['8', '9', '10', '11', '12', 'AP'];

  const subjectList = [
    'English',
    'Composition',
    'Social Studies',
    'Foundations of Mathematics',
    'Pre-Calculus',
    'Calculus',
    'Chemistry',
    'Earth Science',
    'Physics',
    'Biology',
    'Science 10',
    'Economics',
    'Computer Programming',
    'French',
    'Mandarin',
    'Korean',
    'Spanish',
    'German',
  ];

  const gradeOnClick = (grade) => {
    console.log(grade);
    setGradeActive({
      grade: grade,
      state: !isGradeActive.state,
    });
  };

  const subjectOnClick = (subject) => {
    console.log(subject);
    setSubjectActive({
      subject: subject,
      state: !isSubjectActive.state,
    });
  };

  const gradeItems = (
    <Fragment>
      <ul className='gradeButtons'>
        {gradeList.map((grade) => (
          <li key={grade} className={grade}>
            <button
              className={`buttonsForGrades ${
                isGradeActive.state &&
                (isGradeActive.grade === grade ? 'is-checked' : '')
              }`}
              onClick={() => {
                gradeOnClick(grade);
              }}
            >
              <b style={{ color: '#626262' }}>{grade}</b>
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );

  const subjectItems = (
    <Fragment>
      <ul className='subjectButtons'>
        {subjectList.map((subject) => (
          <li key={subject} className={subject}>
            <button
              className={`buttonsForSubjects ${
                isSubjectActive.state &&
                (isGradeActive.subject === subject ? 'is-checked' : '')
              }`}
              onClick={() => {
                subjectOnClick(subject);
              }}
            >
              <b style={{ color: '#626262' }}>{subject}</b>
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
  return (
    <div className='homeContainer'>
      <div className='filterBoard'>
        <h4>
          <b>Filters</b>
        </h4>
        <br></br>
        <h5>
          <b>Grades</b>
        </h5>
        {gradeItems}
        <h5>
          <b>Subjects</b>
        </h5>
        {subjectItems}
      </div>
      <div className='questionBoard'>
        <Question />
      </div>
    </div>
  );
};

export default Home;
