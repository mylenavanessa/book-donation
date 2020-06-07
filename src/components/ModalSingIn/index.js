import React, { useState }  from 'react';
import {Modal, Button, Select, Spin} from 'antd'

import { LoadingOutlined } from '@ant-design/icons';

import './styles.css'

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;

const { Option } = Select;


export default function ModalSingIn({ visible, handleToLogin, handleCloseModal , submitSingIn, loadingSingIn}) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [state, setState] = useState(undefined)
  const [city, setCity] = useState(undefined)

  async function handleSubmit(e){
    e.preventDefault()
    const res = await submitSingIn({email, name, username, password, phone, state, city})
    if(res){
      setEmail('')
      setName('')
      setPassword('')
      setPhone('')
      setUsername('')
      setState(undefined)
      setCity(undefined)
    }
  }
  return (
    <Modal
        visible={visible}
        footer={null}
        onCancel={handleCloseModal}
        style={{marginTop: -40}}
      >
        <div className='modalSingIn'>
          <h2>Cadastre-se</h2>
          <p>Entre na comunidade e aumente o número de leitores da sua cidade</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              type="email" 
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="text" 
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              type="text" 
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="password" 
              placeholder='senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              type="tel" 
              placeholder='telefone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="containerSelect">
              <Select 
                showSearch
                size="large" 
                bordered={false} 
                placeholder='estado'
                className="selectLocation"
                value={state}
                onChange={(value) => setState(value)} 
              >
                <Option value='Pernambuco'>Pernambuco</Option>
              </Select>
            </div>
            <div className="containerSelect">
              <Select 
                showSearch
                size="large" 
                bordered={false} 
                placeholder='cidade'
                className="selectLocation"
                value={city}
                onChange={(value) => setCity(value)} 
              >
                <Option value='Recife'>Recife</Option>
              </Select>
            </div>
            <button className='button' type='submit'> <Spin indicator={antIcon} spinning={loadingSingIn} style={{paddingRight: 10}}/> Cadastrar</button>
          </form>

          <div className='footerSingIn'>
            <p>Já possui conta?</p>
            <Button className='linkButton' type='link' onClick={handleToLogin}>entre agora</Button>
          </div>
        </div>

      </Modal>
  );
}
