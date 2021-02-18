import React,{ Component } from 'react';
import { FaGithub } from 'react-icons/fa';

class SingleProject extends Component {
  render() {
    const { items } = this.props
    const { name, info, link, image } = items
    return(
      <li className="project-item">
        <section>
          <div className="sinal"></div>
          <div className="sinal"></div>
          <div className="sinal"></div>
        </section>
        <a href={ link } target='_blanck'>
          <img src={ image } alt="shopping-cart-foto"/>
        </a>
        <h2>{ name }</h2>
        <p>{ info }</p>
        <h3><FaGithub size='20px' color='black'/></h3>
      </li>
    );
  }
}

export default SingleProject;
