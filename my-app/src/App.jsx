import './App.css'
import React from 'react'
import imagem from './assets/d9e4dd47fede86c9eaa410946a7b303c.jpg'
import assets from './assets/suplementos.webp'
import imagens from './assets/ebd2101983.webp'
import img from './assets/viegaro-redmi-airdots-2-fones-de-ouvido-bluetooth-fone-de-ouvido-32307904807067_600x-removebg-preview.png'
import im from './assets/bl-028-menor-2-657-ebrindes.png'
import i from './assets/image-removebg-preview--90--1ynme2vjtw.webp'
import nutri from './assets/whatsapp-image-2023-12-14-at-19.47.22.avif'
import nutris from './assets/images.jpg'


function App() {

  return (

    <div className='containerApp'>
      <div className="header">
        <header>
          <h1>FitNess GYM <img src={imagem} width={40} /></h1>

          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#produtos">PRODUTOS</a></li>
            <li><a href="#planos">PLANOS</a></li>
          </ul>
        </header>
      </div>

      <div className="body" id='home'>
        <section>
          <h1>Venha fazer parte da FitNess</h1>
          <p>Uma academia completa e planejada para melhor atende-lo. Investimos nos melhores aparelhos e em marcas de confiança para que você melhore seus resultados com segurança. Conheça nossos planos e venha ficar no shape!</p>
        </section>

        <article>
          <img src={imagem} alt="" />

        </article>

      </div>


      <div className="produtos" id='produtos'>
        <article>
          <img src={assets} alt="suplementos" width={650} />
        </article>
        <section>
          <h1>Temos Suplementos</h1>
          <p>Para melhorar seus resultados a equipe FitNess conta com os melhores suplementos das melhores marcas do Brasil e do mundo. Suplementos de todos os tipos, para todos os gostos.</p>
        </section>
      </div>


      <div className="outros">
        <section>
          <h1>Temos acessórios</h1>
          <p>Aqui você encontra coqueteleiras, straps, cinta, fones de ouvido. Tudo para melhorar sua experiência na FitNess.</p>
        </section>

        <article>
          <img src={imagens} alt="straps" width={150} />
          <img src={img} alt="fones" width={180} />
          <img src={im} alt="bolsa-academia" width={180} />
          <img src={i} alt="coqueteleira" width={180} />
        </article>
      </div>

      <div className="plans" id='planos'>
        <h1>Conheça nossos planos</h1>
        <div className="planos">

          <div className="plano1">
            <h1>Plano Mensal</h1>
            <p>Disponível por 30 dias</p>
            <ul>
              <li>Treino a qualquer hora por 30 dias</li>
              <li>Acesso a nutricionista por 30 dias</li>
              <li>Acompanhamento personalizado</li>
              <li>Planilhas de Treino personalizado</li>
              <li>20% de desconto nos produtos na FitNess</li>
            </ul>

            <button>R$70,00 Mensal</button>
          </div>

          <div className="plano2">
            <h1>Plano Semestral</h1>
            <p>Disponível por 60 dias</p>
            <ul>
              <li>Treino a qualquer hora por 60 dias</li>
              <li>Acesso a nutricionista por 60 dias</li>
              <li>Acompanhamento personalizado</li>
              <li>Planilhas de Treino personalizado</li>
              <li>40% de desconto nos produtos FitNess</li>
            </ul>

            <button>R$420,00 Semestral</button>
          </div>

          <div className="plano3">
            <h1>Plano Anual</h1>
            <p>Disponível por 365 dias</p>
            <ul>
              <li>Treino a qualquer hora por 365 dias</li>
              <li>Acesso a nutricionista por 365 dias</li>
              <li>Acompanhamento personalizado</li>
              <li>Planilhas de Treino personalizado</li>
              <li>80% de desconto nos produtos FitNess</li>
            </ul>

            <button>R$840,00 Anual</button>
          </div>

        </div>
      </div>

      <div className="nutri">
        <h1>Nossos Nutricionistas</h1>

        <div className="nutrics">

        <div className="nutri1">
          <img src={nutri} alt="" width={120} />
          <h3>Dra. Tatiane Almeida</h3>
          <p>Formada em Nutrição pela Estácio em 2019.
          dedicada a promover a saúde e o bem-estar através de orientações alimentares personalizadas. Com formação acadêmica e conhecimento aprofundado em ciências da nutrição, ela desempenha um papel crucial na promoção de hábitos alimentares saudáveis e na prevenção de doenças relacionadas à alimentação.
          </p>
        </div>

        <div className="nutri2">
          <img src={nutris} alt="" width={150} />
          <h3>Dra. Josiane Romeiro</h3>
          <p>Formada na USP em 2015.
          dedicada a promover a saúde e o bem-estar através de orientações alimentares personalizadas. Com formação acadêmica e conhecimento aprofundado em ciências da nutrição, ela desempenha um papel crucial na promoção de hábitos alimentares saudáveis e na prevenção de doenças relacionadas à alimentação.
          </p>
        </div>
        </div>

      </div>


    <div className="footer">
    <h1>FitNess GYM <img src={imagem} width={40} /></h1><hr />

    <ul>
      
      <li>(16)3663-4525</li>
      <li>(16)99369-4465</li>
      <li>Av. Altino Arantes, 365 - RP/SP</li>
    </ul>
    </div>
    </div>

  )
}

export default App
