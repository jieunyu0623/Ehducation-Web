import React, { useRef } from 'react';
import logo from './logo.png';
import '../../App.css';

const Navbar = () => {
  const text = useRef('');
  const onChange = (e) => {
    if (text.current.value !== '') {
      console.log(e.target.value);
    }
  };
  return (
    <div className='navbar'>
      <img src={logo} alt='Ehducation' className='logoStyle' />
      <form action='/' method='get'>
        <input type='textbox' className='searchBoxStyle' onChange={onChange} />
        <button type='submit' className='searchSubmit'>
          <i
            className='fas fa-search'
            style={{
              padding: '10px',
              fontFamily: 'FontAwesome',
              cursor: 'pointer',
            }}
            onClick={console.log('haha')}
          ></i>
        </button>
      </form>
      <div className='push'>
        <button className='askButton'>Ask Questions</button>
      </div>
      <div
        style={{
          display: 'inline-block',
          backgroundColor: '#D9F6AA',
          borderRadius: '50%',
          marginLeft: '1rem',
        }}
        className='push2'
      >
        <i
          className='fas fa-user-circle'
          style={{
            fontSize: '1.75rem',
            color: '#333333',
            padding: '10px',
          }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
