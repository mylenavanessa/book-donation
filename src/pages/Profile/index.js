import React from 'react';

import { Avatar, Popover } from 'antd';
import { UserOutlined, EditOutlined, MailOutlined, StarTwoTone} from '@ant-design/icons';

import './styles.css';
import vector from '../../assets/vector.png'
import bookOpen from '../../assets/book-open.png'
import iconBook from '../../assets/icon-book.png'

import { Link } from 'react-router-dom';


export default function Profile() {

  const content = (
    <di>
      <div>username</div>
      <div> 123</div>
      <div>4.7</div>
      <div>sair</div>
    </di>
  )
  return (
    <div className='profileContainer'> 
      <header>
        <img src={vector} alt='cabeça' className='headerProfile'/>
        
        <div className='headerTitles'>
          <button type='button' className='donate' onClick={() => {}}>
            <img src={bookOpen} alt='book open' style={{width: 20}}/>
            doar
          </button>

          <div className='headerLinks'>
            <Link to='/' className='headerLink'>comprar bookhearts</Link>
            <Link to='/' className='headerLink'>livros disponivéis</Link>
            <Popover content={content} title={null}>
              <Avatar icon={<UserOutlined />} />
            </Popover>
          </div>
        </div>

        <div className='profileEdit'>
          <div className='avatar'>

            <Avatar size={100} icon={<UserOutlined />} />
            <div>
              <button type='button' className='edit' onClick={() => {}}>
                <EditOutlined />
                editar
              </button>
            </div>
          </div>

          <div className='userInformations'>
            <div>
              <UserOutlined /> <span>fulana de tal</span>
            </div>
            <div>
              <MailOutlined /> <span>fulana@gmail.com</span>
            </div>
            <div className='userIcons'>
              <img src={iconBook} alt='book hearts' style={{width: 16}}/> <span>123</span>
              <StarTwoTone twoToneColor='#FFCE31' style={{marginLeft: 15}}/> <span>4.7</span>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}
