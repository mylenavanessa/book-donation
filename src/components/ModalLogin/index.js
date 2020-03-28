import React from 'react';
import {Modal, Button} from 'antd'

import './styles.css'

export default function ModalLogin({ visible, handleToSingIn, handleCloseModal }) {
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
          <form>
            <input
              type="email" 
              placeholder='email'
            />
            <input
              type="password" 
              placeholder='senha'
            />

            <button className='button' type='submit'>Entrar</button>
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
