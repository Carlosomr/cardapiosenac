import LoginForm from '../../components/LoginForm';
import food from '../../assets/food.png'
import { PageContainer, Blocod } from './styles';

function LoginPage() {
  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
  };

  return (
    <PageContainer>
      <img src={food} alt="foto de comida" />
    
      <LoginForm onLogin={handleLogin} />
      
    </PageContainer>
  );
}

function Login() {
  return (
    <Blocod>
      <LoginPage />
    </Blocod>
  );   
}
export default Login;