import React from 'react'
import './style.css'

function ServiceRow( { titleParagraph, paragraph, titleList, list, imageName} ) {
  return (
    <div className="service__row">
        <div className="service__row-paragraph">
          <h3>{titleParagraph}</h3>
          <p>{paragraph}</p>
        </div>
          <div className="service__row--list">
              <div className="row--list--image">
                <img src={require(`../../../assets/images/${imageName}`)} alt={imageName} />
              </div>
              <div className="row--list--content">
                <h3>{titleList}</h3>
                <ul>
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
  )
}

export default ServiceRow