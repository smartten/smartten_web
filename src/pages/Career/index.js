import { React, useState, useEffect } from "react";
import BlogBanner from "../../components/layout/BlogBanner";
import "./style.css";
import { CareerContent } from "../../assets/context";

function Career() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.title = "SMARTTEN - Software Development Company";
    document.description = "SMARTTEN";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  const [uploadFile, setUploadFile] = useState("");

  async function postCustomersData(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", uploadFile);
    // console.log("checkkkk", uploadFile);
    // console.log("checkkkk2", formData);
  }

  return (
    <div className="career">
      <BlogBanner
        title="Career"
        backgroundName="banner-career.jpg"
        description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas"
      />
      <div className="container">
        <div className="career-content p50">
          <div className="wrap-sidetext col-md-6 col-sm-12 col-12">
            <div className="wrap-sidetext__content">
              <CareerContent />
            </div>
          </div>
          <div className="career-input col-md-6 col-sm-12 col-12">
            <h3>Apply Now</h3>
            <div>
              <form method="post" id="careerFrm" name="careerFrm">
                <div className="form-group">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control "
                    placeholder="Your Name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control "
                    placeholder="Your Email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="form-control "
                    placeholder="Your Mobile Number"
                    name="mobile_no"
                    id="mobile_no"
                  />
                </div>
                <div className="form-group">
                  <select
                    onChange={(e) => {
                      const { options, value } = e.target;
                      setPost(options[value].innerHTML);
                    }}
                    className="form-control "
                    name="posts"
                    id="posts"
                    placeholder="Select Post"
                  >
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
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    cols="30"
                    rows="8"
                    className="form-control "
                    placeholder="Your Message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div
                    // onChange={(e) => {
                    //   setUploadFile(e.target.files[0]);
                    // }}
                    className="upload upload-type-btn"
                  >
                    <input
                      type="file"
                      className="d-none"
                      name="uploadCarrer"
                      id="uploadCarrer"
                      // onChange={(e) => {
                      //   setUploadFile(e.target.files[0]);
                      // }}
                      onchange="return validateImageExtensionOther(this.value)"
                    />
                    <label for="uploadCarrer" className="ftr-icons upload-icon">
                      <span>
                        <i className="fa-solid fa-upload"></i>&nbsp; Upload
                        Attachment
                      </span>
                    </label>
                  </div>
                  <p className="note-p" id="uploadFile"></p>
                </div>
                <div className="form-group">
                  <button
                    onClick={postCustomersData}
                    type="submit"
                    id="submitBtn"
                    className="btn btn_m3 btn-black"
                  >
                    Apply Now
                  </button>
                  <button className="btn btn_m3 btn-black" type="reset">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
