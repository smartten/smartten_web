import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import Fade from 'react-reveal/Fade';

function ServiceRow( { titleParagraph, paragraph, titleList, list, imageName} ) {
  return (
    <Fade bottom>
      <div className="service__row">
          <div className="service__row-paragraph">
            <Link to="/services/post">
              <h3>{titleParagraph}</h3>
            </Link>
            <p>{paragraph}</p>
          </div>
          <div className="service__row--list">
              <div className="row--list--image">
                <img src={require(`../../../assets/images/${imageName}`)} alt={imageName} />
              </div>
              <div className="row--list--content">
                <h3>{titleList}</h3>
                <ul className="list--content-items">
                  {list.map((item, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-angles-right"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
          </div>
      </div>
    </Fade>
  )
}

export default ServiceRow