import LoginForm from '../../components/LoginForm';
import { PageContainer, Bloco, Blocod } from './styles';

function LoginPage() {
  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
  };

  return (
    <PageContainer>
      <img src="https://www.proceso.com.mx/u/fotografias/fotosnoticias/2019/6/25/100602.jpg" alt="" />
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