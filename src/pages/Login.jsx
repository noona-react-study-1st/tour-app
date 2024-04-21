import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/SearchPage/Common.style.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // 로그인 처리 후, 메인 페이지로 이동합니다.
    navigate('/'); // 메인 페이지로 이동합니다.
  };

  const handleSignUp = () => {
    // 회원가입 처리 후, 메인 페이지로 이동합니다.
    navigate('/'); // 메인 페이지로 이동합니다.
  };

  return (
    <div className='login-container'>
      <div className='login-content'>
        <h1>로그인</h1>
        <form className='login-form'>
          <label htmlFor='username'>이메일 주소</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>비밀번호</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='login-option'>
            <div className='login-remember'>
              <input type='checkbox' />
              <p>아이디 기억하기</p>
            </div>
            <p>비밀번호 찾기</p>
          </div>
          <button type='button' onClick={handleLogin}>
            로그인
          </button>
          <button type='button' onClick={handleSignUp}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
