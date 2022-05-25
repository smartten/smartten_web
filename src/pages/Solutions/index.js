import React from 'react'
import './style.css'

function Solutions() {
  return (
    <div className="solutions">
      <div className="solutions-banner">
        <div className="solutions-content-wrap">
          <div className="solutions-content">
            <h2>CRM Software Development</h2>
            <h3>We can develop the best tailor-made customer relationship management (CRM) software to improve your business processes and increase clients' loyalty.</h3>
          </div>
        </div>
      </div>
      <div className="solutions-table-wrap">
        <div className="solutions-table">
          <div className="description">
            <h2>Rummy Game Development Solution</h2>
            <p>Volan Software & Technologies will help start your own gaming platform in the shortest possible time. The platform offers some of the best tools and features that can help run your rummy game with minimal downtime. Our ready-to-use online rummy platform can be customized for branding, features & functionality and more. Our team offers all-inclusive rummy solutions covering all aspects of the game including payment gateway integration for Fiat currency, and cryptocurrencies like Bitcoin. The platform offers payment transactions in a safe and secured ecosystem with a transaction tracking system.</p>
          </div>
          <div className="image">
            <img alt="img" src={require('../../assets/images/solutions-table.png')}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Solutions