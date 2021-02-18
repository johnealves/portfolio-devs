import React, {  Component} from 'react';
import "../style/home.css"
import home from '../assets/home.png'

class Home extends Component {
  render() {
    return (
      <section className='home' id='home'>
        <section className='info'>
          <h2><span>|</span>Desenvolvedor Frontend</h2>
          <h1>Johne Alves</h1>
          <p>Bem vindo ao meu mundo. Aqui é onde mostro todas a minha experiencia e paixão, que é a desenvolver.</p>
          <div>
            <button>LinkedIn</button>
            <button>GitHub</button>
          </div>
        </section>
        <section className="image">
            <img className="image-top" src={ home } alt={ 'top' } />
        </section>
      </section>
    )
  }
}

export default Home;