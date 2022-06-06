import {React, useState} from 'react'
import BlogBanner from '../../components/layout/BlogBanner'
import blogApi from '../../api/blogApi'
import './style.css'

function Career() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [post, setPost] = useState('')
  const [message, setMessage] = useState('');
  const [ uploadFile, setUploadFile] = useState([])

  async function postCustomersData(){
    await blogApi.postCustomersInfo('info', {
      name:name,
      email:email,
      phone:phone,
      post:post,
      message:message,
      uploadFile:uploadFile,
    })
  }

  return (
    <div className="career">
        <BlogBanner title="Career" backgroundName="banner-career.jpg" description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas" />
        <div className="container">
            <div className="career-content p50">
              <div className="wrap-sidetext col-md-6 col-sm-12 col-12">
                <div className="wrap-sidetext__content">
                  <h5>Why join VolanSoft???</h5>
                  <p>Simple. <strong>We love what we do.</strong><br /> We’ve been creating amazing mobile and connected experiences since 5+ years. We are working in a direction to set some era in the web/mobile app development field. </p>
                  <p>We believe in passionate people. Our skilled team work together to do what’s never been done before, everyday. Combining the office in Jaipur and the world’s prestigious global clients, we create the best opportunity for learning and expanding your know-how. Today, VolanSoft is actively designing and developing meaningful and challenging projects, using cutting-edge tech only, with the ultimate goad of raising the bar even higher. </p>
                  <p>Reasons to join us-</p>
                  <ul className="icon_ul_list">
                    <li><i className="fa-solid fa-angles-right"></i>VolanSoft would love to hire your awesomeness.</li>
                    <li><i className="fa-solid fa-angles-right"></i>We do the projects others think are too hard to manage.</li>
                    <li><i className="fa-solid fa-angles-right"></i>Obsessed with what’s next, and cutting-edge tech.</li>
                    <li><i className="fa-solid fa-angles-right"></i>We strive for the better and think globally.</li>
                  </ul>
                  <p></p>
                  <p>Grow your career at VolanSoft. Come work and play with the very best developers, designers and strategists. Don’t just take our word for it: We’ve been named a Great Place to Work, come here and you’ll see how much we love working.</p>
                </div>
              </div>
              <div className="career-input col-md-6 col-sm-12 col-12" >
                <h3>Apply Now</h3>
                <div>
                  <form method="post" id="careerFrm" name="careerFrm" >
                    <div className="form-group">
                      <input  onChange={e => setName(e.target.value)}type="text" className="form-control " placeholder="Your Name" name="name" id="name" />
                    </div>
                    <div className="form-group">
                      <input  onChange={e => setEmail(e.target.value)}type="text" className="form-control " placeholder="Your Email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                      <input  onChange={e => setPhone(e.target.value)}type="text" className="form-control " placeholder="Your Mobile Number" name="mobile_no" id="mobile_no" />
                    </div>
                    <div className="form-group">
                      <select onChange={e => setPost(e.target.value)} className="form-control " name="posts" id="posts" placeholder="Select Post">
                        <option value="">Select Post</option>
                        <option value="1">ANDROID DEVELOPER</option>
                        <option value="2">Business Analyst</option>
                        <option value="3">PHP Developer</option>
                        <option value="4">SR. IOS DEVELOPER</option>
                        <option value="5">SR. WEB DESIGNER</option>
                        <option value="6">WORDPRESS DEVELOPER</option>					
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea onChange={e => setMessage(e.target.value)} cols="30" rows="8" className="form-control " placeholder="Your Message" name="message" id="message"></textarea>
                    </div>
                    <div className="form-group">
                      <div onChange={e => setUploadFile(e.target.value)} className="upload upload-type-btn">
                      <input type="file" className="d-none" name="uploadCarrer" id="uploadCarrer" onchange="return validateImageExtensionOther(this.value)" />
                      <label for="uploadCarrer" className="ftr-icons upload-icon">
                          <span><i className="fa-solid fa-upload"></i>&nbsp; Upload Attachment</span>
                      </label>
                      </div>
                      <p className="note-p" id="uploadFile"></p>
                    </div>
                    <div className="form-group">
                      <button onClick={postCustomersData}  type="submit" id="submitBtn" className="btn btn_m3 btn-black">Apply Now</button>
                      <button className="btn btn_m3 btn-black" type="reset">Reset</button>
                    </div>
                  </form>				
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Career