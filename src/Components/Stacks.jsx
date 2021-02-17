import React, {  Component} from 'react';
import "../style/stacks.css"
import top from '../assets/image-top.png'

class Stacks extends Component {
  render() {
    return (
      <section className='stacks'>
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
            <img className="image-top" src={ top } alt={ 'top' } />
        </section>
      </section>
    )
  }
}

export default Stacks;