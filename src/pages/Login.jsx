import { useNavigate, Link } from 'react-router-dom';
import {
  ReferralText,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpHeaderText,
  SignUpInputContainer,
} from '../styled/SignUp';

const Login = () => {
  document.title = 'JoinMonie | Log In';

  const navigate = useNavigate();

  const handleValidation = () => {
    navigate('/dashboard');
  };
  return (
    <SignUpContainer>
      <SignUpHeaderText>Welcome Back</SignUpHeaderText>
      <SignUpForm>
        <SignUpInputContainer>
          <label htmlFor='email'>Email Address</label>
          <input type='email' />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <label htmlFor='password'>Password</label>
          <input type='password' />
        </SignUpInputContainer>
        <SignUpBtn onClick={() => handleValidation()}> Login </SignUpBtn>{' '}
      </SignUpForm>
      <ReferralText style={{ marginTop: '-20%' }}>
        Don't have an account? <Link to={'/register'}>Create One.</Link>
      </ReferralText>
    </SignUpContainer>
  );
};

export default Login;
