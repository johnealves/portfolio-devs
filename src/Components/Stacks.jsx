import React, { Component } from 'react'
import '../style/stacks.css';
import { FaGithubSquare } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

class Stacks extends Component {
  render() {
    return (
      <div className="stacks" id="stacks">
        <header>
          <h1>Stacks</h1>
        </header>
        <section className='list'>
          <div className="stack-item">
            <p><FaGithubSquare size='130px' color='white'/></p>
            <h3>GitHub</h3>
          </div>
          <div className="stack-item">
            <p><FaHtml5 size='130px' color='rgb(233, 94, 40)'/></p>
            <h3>Html 5</h3>
          </div>
          <div className="stack-item">
            <p><FaCss3Alt size='130px' color="rgb(34, 152, 215)"/></p>
            <h3>CSS 3</h3>
          </div>
          <div className="stack-item">
            <p><FaJsSquare size='130px' color="rgb(247, 224, 24)"/></p>
            <h3>JavaScript</h3>
          </div>
          <div className="stack-item">
            <p><FaReact size='130px' color='rgb(125, 223, 255)'/></p>
            <h3>React</h3>
          </div>
        </section>
      </div>
      
    )
  }
}

export default Stacks; 