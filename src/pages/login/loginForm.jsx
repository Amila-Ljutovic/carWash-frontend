import axios from 'axios'

//styled
import { Form, Title, Wrapper, Button, LogoWrapper } from './styledLoginForm'

//components
import Input from '../../components/input/input';
import Logo from '../../components/logo/logo';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

//api
import { login } from '../../api/auth';

function LoginForm() {
    let token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const onChangeEmail = (e) => {
        setLoginData({...loginData, email: e})
    }

    const onChangePassword = (e) => {
        setLoginData({...loginData, password: e})
    }

    const handleSubmit = () => {
        login(loginData).then((res) => {
            localStorage.setItem('token',res.data.token)
            navigate('/')
        }).catch(err => console.log(err))
    }
    if(token) {
        return <Navigate to="/" />;
    }
    return(
        <Wrapper>
          <Form >
            <LogoWrapper>
              <Logo />
              <Title>Login</Title>
            </LogoWrapper>
            
            <Input type="email" value={loginData.email} onChange={onChangeEmail} label={'Email'}/>
            <Input type="password" value={loginData.password} onChange={onChangePassword} label={'Password'} />
            <Button  onClick={()=>handleSubmit()}>Login</Button>
          </Form>
        </Wrapper>);
}

export default LoginForm;