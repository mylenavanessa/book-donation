import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

import vector from '../../assets/vector.png'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRigth from '../../assets/arrow-rigth.png'
import bookHeart from '../../assets/book-heart.png'
import book from '../../assets/book.png'

import ModalLogin from '../../components/ModalLogin'
import ModalSingIn from '../../components/ModalSingIn'


export default function Home() {
  const [modalLoginVisible, setModalLoginVisible] = useState(false)
  const [modalSingInVisible, setModalSingInVisible] = useState(false) 

  function handleToLogin () {
    setModalSingInVisible(false)
    setModalLoginVisible(true)
  }

  function handleToSingIn() {
    setModalLoginVisible(false)
    setModalSingInVisible(true)
  }

  function handleCloseModal() {
    setModalLoginVisible(false)
    setModalSingInVisible(false)
  }

  return (
    <div className='homeContainer'>
      <header>
        <img src={vector} alt='cabeça'/>
        
        <div className='headerTitles'>
          <h2>Nome do Projeto</h2>

          <div className='headerLinks'>
            <Link to='/' className='headerLink'>Home</Link>
            <Link to='/profile' className='headerLink'>Sobre</Link>
            <Link to='/' className='headerLink' onClick={handleToLogin}>Entrar</Link>
            
            <button type='button' className='signIn' onClick={handleToSingIn}>Inscreva-se</button>
          </div>
        </div>

        <h1 className='headerTitle'>Doe um livro e incentive a leitura</h1>
      </header>
      <div className='container'>
        <div className='cards'>
          <div className='card'>
            <h3>Nome</h3>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis”</p>
          </div>

          <div className='card'>
            <h3>Nome</h3>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis”</p>
          </div>
        </div>

        <div className='exampleDonation'>
          <img src={book} alt='livro'/>
          <div className='arrows'>
            <div className='arrow'>
              <h2>Doe livro e ganhe bookHearts</h2>
              <img src={arrowRigth} alt='flecha direita'/>
            </div>
            <div className='arrow'>
              <img src={arrowLeft} alt='flecha esqueda'/>
              <h2>Troque seus bookHearts por livros</h2>
            </div>
          </div>
          <img src={bookHeart} alt='cabeça'/>
        </div>
      </div>
      <div className='footer'>
          <p>Projeto de software II</p>
          <p>Faculdade Nova Roma</p>
      </div>

      <ModalLogin 
        visible={modalLoginVisible}
        handleToSingIn={handleToSingIn}
        handleCloseModal={handleCloseModal}
      />

      <ModalSingIn
        visible={modalSingInVisible}
        handleToLogin={handleToLogin}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}
