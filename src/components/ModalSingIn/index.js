import React from 'react';
import {Modal, Button} from 'antd'

import './styles.css'

export default function ModalSingIn({ visible, handleToLogin, handleCloseModal }) {
  return (
    <Modal
        visible={visible}
        footer={null}
        onCancel={handleCloseModal}
      >
        <div className='modalSingIn'>
          <h2>Cadastre-se</h2>
          <p>Entre na comunidade e aumente o número de leitores da sua cidade</p>
          <form>
            <input
              type="email" 
              placeholder='email'
            />
            <input
              type="username" 
              placeholder='senha'
            />
            <input
              type="password" 
              placeholder='senha'
            />
            <input
              type="telefone" 
              placeholder='senha'
            />

            <button className='button' type='submit'>Cadastrar</button>
          </form>

          <div className='footerSingIn'>
            <p>Já possui conta?</p>
            <Button className='linkButton' type='link' onClick={handleToLogin}>entre agora</Button>
          </div>
        </div>

      </Modal>
  );
}
