import React, {useState} from 'react';
import {Modal, Button, Spin} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

import './styles.css'

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
export default function ModalLogin({ visible, handleToSingIn, handleCloseModal, submitLogin, loadingLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e){
    e.preventDefault();
    const res = await submitLogin({email, password})
    if(res){
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div>
     <Modal
        visible={visible}
        footer={null}
        onCancel={handleCloseModal}
      >
        <div className='modalLogin'>
          <h2>Entrar</h2>
          <p>Entre na comunidade e aumente o número de leitores da sua cidade</p>
          <form onSubmit={(e) => handleLogin(e)}>
            <input
              type="email" 
              placeholder='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password" 
              placeholder='senha'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='button' type='submit'> <Spin indicator={antIcon} spinning={loadingLogin} style={{paddingRight: 10}}/> Entrar</button>
          </form>

          <div className='footerLogin'>
            <p>Ainda não possui conta?</p>
            <Button type='link' className='linkButton'  onClick={handleToSingIn}>cadastre-se agora</Button>
          </div>
        </div>

      </Modal>
    </div>
  );
}
