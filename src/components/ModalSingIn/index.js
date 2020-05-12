import React from 'react';
import {Modal, Button, Select} from 'antd'

import './styles.css';

const { Option } = Select;


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
              placeholder='username'
            />
            <input
              type="password" 
              placeholder='senha'
            />
            <input
              type="tel" 
              placeholder='telefone'
            />
            <div className="containerSelect">
            <Select 
              showSearch
              size="large" 
              bordered={false} 
              placeholder='estado'
              className="selectLocation" 
            >
              <Option value='PE'>Pernambuco</Option>
            </Select>
            </div>
            <div className="containerSelect">
            <Select 
              showSearch
              size="large" 
              bordered={false} 
              placeholder='cidade'
              className="selectLocation" 
            >
              <Option value='Recife'>Recife</Option>
            </Select>
            </div>
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
