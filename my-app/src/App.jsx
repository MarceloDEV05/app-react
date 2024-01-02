import './App.css'
import React from 'react'
import imagem from './assets/d9e4dd47fede86c9eaa410946a7b303c.jpg'


function App() {

  return (

    <div className='containerApp'>
      <div className="header">
        <header>
          <h1>FitNess GYM</h1>
          <ul>
            <li><a href="@">HOME</a></li>
            <li><a href="@">PRODUTOS</a></li>
            <li><a href="@">OFERTAS</a></li>
            <li><a href="@">PLANOS</a></li>
          </ul>
        </header>
      </div>

      <div className="body">
        <section>
          <h1>Venha fazer parte da FitNess</h1>
          <p>Uma academia completa e planejada para melhor atende-lo. Investimos nos melhores aparelhos e em marcas de confiança para que você melhore seus resultados com segurança. Conheça nossos planos e ofertas e venha ficar no shape!</p>
        </section>
        
        <article>
          <img src={imagem} alt="logo-academia" />
        </article>

      </div>


      <div className="produtos">
        
          <h1></h1>

      </div>
    </div>



  )
}

export default App
