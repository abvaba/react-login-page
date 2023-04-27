import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt from 'jsonwebtoken';

const ConfirmCode = ({...props}) => {
  const [code, setCode] = useState(['','','','']);
  const navigate = useNavigate();
  const content = new FormData();
  content.append('phone', '09147960244');

  const handleChange = (e, index) => {
    const val = e.target.value;
    const targetElement = e.target.nextElementSibling;
    const arr = [...code];
    arr[index] = val.slice(0, 1);
    setCode(arr);
    targetElement.removeAttribute('disabled');
    if(index !== 3) {
      targetElement.focus();
    }
  }

  useEffect(() => {
    content.append('code', code.join(''));
  }, [code])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/auth/v1/verify`, {
      method: 'POST',
      body: content,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => {
        res
          .json()
          .then(data => {
            if(data.login) {
              navigate('/success-page')
            }
          })
      })
      .catch(err => console.log(err))
  }

  const decoded = jwt.verify('11|E6ums6uVdHlbfyqrvTYYsO8aXKpEPlFRCFgvuBYX', 'HS256');
  console.log(decoded, 'd cd ')

  return (
    <form onSubmit={handleSubmit}>
      {code.map((cd, index) => <input
        type='number'
        min={0}
        max={9}
        value={code[index]}
        key={index}
        onChange={e => handleChange(e, index)}
        disabled={index !== 0}
      />)}

      <button type='submit'>ارسال</button>
    </form>
  );
};

export {ConfirmCode};