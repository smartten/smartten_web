import AboutRow from '../../components/layout/AboutRow';
import CountUp from 'react-countup';
import { AiFillCheckCircle, AiTwotoneLike } from 'react-icons/ai';  
import { ImMap, ImSmile } from 'react-icons/im'
import houseImg from '../../assets/images/houseImg.jpeg';
import ourTeam from '../../assets/images/our-team.jpeg';
import Fade from 'react-reveal/Fade';
import './style.css';
import Banner from '../../components/layout/BlogBanner';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-banner">
          <Banner title="About Us" backgroundName="banner-about.jpg" description="A company with creative professionals, committed to deliver the products with excellence" />
      </div>
      <div className="about-achivements">
        <div className="about-achivements--container">
          <div className="achivements-lists">
            <div className="achivements-item ">
              <AiFillCheckCircle />
              <span>
                <CountUp start={0} end={300} duration={3.5} />
                +
              </span>
              <span>Project Complete</span>
            </div>
            <div className="achivements-item border-left">
              <ImMap />
              <span>
                <CountUp start={0} end={20} duration={3.5} />
                +
              </span>
              <span>Project Complete</span>
            </div>
            <div className="achivements-item border-top">
              <ImSmile />
              <span>
            <CountUp start={0} end={100} duration={3.5} />
            +
              </span>
              <span>Project Complete</span>
            </div>
            <div className="achivements-item border-left border-top">
              <AiTwotoneLike />
              <span>
                <CountUp start={0} end={82} duration={3.5} />%
              </span>
              <span>Project Complete</span>
            </div>
          </div>
          <div className="achivements-details">
            <Fade bottom>
              <h3>Are you Ready</h3>
              <h1>Welcome to our company</h1>
            </Fade>
            <p>
              Volan Software & Technologies is one amongst the leading Mobile Application Development Company and also website development company which is excelled in developing exemplary IT solutions for various industries. Our competence is to fascinate customers, industrial edge and work towards greater satisfaction. We have experts professionals belonging to all leading technologies who are always curious to adapt according to varying technology requirements. Delivering commitments within the committed timeline are two major concerns which are considered while developing applications. We have been tagged as the favorite development partner by our clients as we have delivered some outstanding solutions in the span of our 5+ years of service where we seek for more in the further coming years.
            </p>
          </div>
        </div>
      </div>
      <div className="about-mission">
        <Fade left>
          <img src={houseImg} alt="House Images" />
        </Fade>
        <div className="mission-details">
        <Fade bottom>
          <h2>
              Our Mission
          </h2>
          </Fade>
          <p>
              To grow as a most reliable and qualitative organization in the field of Information Technology by the virtue of innovations and novelty. We work to be the most successful and the best business out there. Our major concern is to provide a innovative and trusted experience to our customers. Our Sole mission is to value your business so that we can bring value to ours.
          </p>
          <Fade bottom>
            <h2>
                Our Vision
            </h2>
            
          </Fade>
          <p>
              Employing contemporary technologies and proceedings to value business of clients with quality which are cost effective and adequate concurrently. We are focused to provide the best IT solutions and work with the cutting edge technologies. Our primary focus is quality with excellence in every aspect of the business phases.
          </p>
        </div>
      </div>
      <div className="about-team">
        <img src={ourTeam} alt="Our Team" />
        <div className="team-details ">
        <Fade bottom>
            <h2 >
              Our Team
            </h2>
            </Fade>
          <p>
            A Team is the secret that makes common people achieve uncommon results. VolanSoft has a team of creative, innovative and expert professionals with strategic minds. We have a passion to work on the leading edge technologies and are always eager to take challenges that evidently enhance our excellence. Our inclination towards the innovation and creativity is the key that has made us achieve outstanding results in the industry.
          </p>
          <p>
            We have worked with various clients and everyone having a different set of requirements and faced many technical challenges. We believe in delivering commitment to the clients with quality and perfection. We visualize the requirements and think out-of-the-box to bring the expectations into life. As an organization we value your business and know our business can only achieve success we build a honest relation with the clients and for this we maintain the transparency throughout the project.
          </p>
      </div>
      </div>
      <div className="about-reasons">
          <Fade bottom>
              <h1>why choose us</h1>
          </Fade>
          <AboutRow title="quality" imgSrc="quality.png" details={['The Quality Testing process at VolanSoft is industry-standard, mature, and proven to be effective.', 'The entire Quality Assurance lifecycle is defined with important aspects like requirements gathering, deployment, functional testing, and project inception.', 'The QA phase also includes applicable informational artifacts quality metrics, test results, test plans, and test cases.','First-class Quality Process Model. Comprehensive reporting: code quality, status, and defect trends. In-house mentoring teams to coach and ramp-up Quality Assurance Engineers.']}  />
          <AboutRow title="speed" imgSrc="speed.png" details={['Moving fast empowers VolanSoft to learn faster and increase the production rate. However, when most other enterprises grow, they become decelerated due to the fear making mistakes.','Building great products requires us to take risks, which we already do. We believe that failure is guaranteed if we fail to take risks by not being fast.','Hence, the speed of productivity is one of the core principles. We have hands-on experience with cloud infrastructures like DigitalOcean, engineyard, and Amazon AWS.']} />
          <AboutRow title="trust" imgSrc="trust.png" details={['We are people and an enterprise, which is trusted in the market for its standards and integrity.','We inspire others to be fair and truthful as principles are more significant than business goals and profit.','We strive to follow an approach, which makes our business partners, stakeholders, portfolio companies, investors, and most importantly, our customers.']} />
          <AboutRow title="technology" imgSrc="technology.png" details={['We, at VolanSoft, have the expertise and a great level of experience working on technologies like Android, Mobile jQuery, Angular JS, Node JS, React JS, CSS3, HTML5 for frontend development and JAVA, PHP, and.Net for backend development.','Our software integration experience includes working on external services like Amazon AWS, MailChimp, Salesforce, Google Analytics and a lot more. Our payment gateway integration services can simplify your payment processing phase.','With extensive experience into payment provider integration, we have worked on major platforms like Stripe, PayTM, Skrill, PayPal, and PayU.']} />
          <AboutRow title="security" imgSrc="security.png" details={['Even minor changes in the SDLC lifecycle can significantly improve the security standards without breaking the project schedule or the bank.','Our development practices integrate security facets throughout the Software Development Life Cycle. It starts right from requirement analysis to project maintenance.', 'We follow a secure development process, which systemized security practices over a range of applications and/or products.']} />
          <AboutRow title="transparency" imgSrc="communication.png" details={['It is one of the most important values of the software development lifecycle and crucial to the success of companies that are into software development.', 'When it comes to our process we have meetings for ceremonies, which help with transparency.', 'As far as transparency is constant we include Sprint planning, Retrospective meetings, Daily standups, and Sprint reviews. This team meetings and occasions give our team as well as the product owners an opportunity for raising issues.', "They also give us a chance, to be honest in terms of our team's progress. Moreover, they give us the flexibility of adopting and improving our processes."  ]} />
          <AboutRow title="the process" imgSrc="process.png" details={['We identify the need or problems and get approval to move forward.','We start planning and monitoring projects by determining what has to be done, how it is done and who is going to do it.', 'Our team identifies and comprehends details about the needs or problems.', 'The designing team starts working on the system components, which satisfy the needs or solve the problems.', 'We, then start designing, testing, and integrating system components.Lastly, we perform systems test to deploy the perfect solution.' ]} />
          <AboutRow title="continuity" imgSrc="continuity.png" details={['Continuity is an essential process in any software development project.', 'It compiles procedures and policies to help companies respond efficiently to system failures and/or major incidents.', 'We are always prepared for managing possible risks.' , 'We also make sure to provide excellent service delivery experiences. We do this by making certain of continued critical services functioning even during significant unusual situations.', "Doing this helps our team to manage the clients' infrastructure to reduce the effects of damages suffered by IT components."]} />
      </div>
    </div>
  )
}

export default AboutUs