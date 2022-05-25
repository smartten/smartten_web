import React from "react";
import "./Career.scss";
import BlogBanner from "../../components/layout/BlogBanner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const Career = () => {
  return (
    <div className="Career">
      <BlogBanner
        title="Career"
        backgroundName="banner-career.jpg"
        description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas

"
      />

      <div className="CareerBottom">
        <div className="CareerBottomLeft">
          <div className="BottomLeftBg"></div>
          <div className="BottomLeftDesc">
            <h2>Why join VolanSoft???</h2>
            <p>
              Simple. <span>We love what we do.</span> <br />
              We’ve been creating amazing mobile and connected experiences since
              5+ years. We are working in a direction to set some era in the
              web/mobile app development field.
            </p>

            <p>
              We believe in passionate people. Our skilled team work together to
              do what’s never been done before, everyday. Combining the office
              in Jaipur and the world’s prestigious global clients, we create
              the best opportunity for learning and expanding your know-how.
              Today, VolanSoft is actively designing and developing meaningful
              and challenging projects, using cutting-edge tech only, with the
              ultimate goad of raising the bar even higher.
            </p>

            <p>Reasons to join us-</p>

            <p className="bt-desc-text">
              <i>
                <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
              </i>{" "}
              VolanSoft would love to hire your awesomeness.
            </p>
            <p className="bt-desc-text">
              <i>
                <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
              </i>{" "}
              We do the projects others think are too hard to manage.
            </p>
            <p className="bt-desc-text">
              <i>
                <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
              </i>{" "}
              Obsessed with what’s next, and cutting-edge tech.
            </p>
            <p className="bt-desc-text">
              <i>
                <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
              </i>{" "}
              We strive for the better and think globally.
            </p>

            <p>
              Grow your career at VolanSoft. Come work and play with the very
              best developers, designers and strategists. Don’t just take our
              word for it: We’ve been named a Great Place to Work, come here and
              you’ll see how much we love working.
            </p>
          </div>
        </div>
        <div className="CareerBottomRight">
          <h1>Apply Now</h1>
          <div className="BottomRightMultiple">
            <div class="form-group">
              <input
                type="text"
                class="form-control v-focus"
                placeholder="Your Name"
                name="name"
                id="name"
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control v-focus"
                placeholder="Your Email"
                name="email"
                id="email"
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control v-focus"
                placeholder="Your Mobile Number"
                name="mobile_no"
                id="mobile_no"
              />
            </div>

            <div class="form-group">
              <textarea
                cols="30"
                rows="8"
                class="form-control v-focus"
                placeholder="Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>

            <div class="form-group">
              <select
                class="form-control v-focus"
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

            <div class="form-group">
              <div class="upload upload-type-btn">
                <input
                  type="file"
                  class="invisible"
                  name="uploadCarrer"
                  id="uploadCarrer"
                  onchange="return validateImageExtensionOther(this.value)"
                />
                <label for="uploadCarrer" class="ftr-icons upload-icon">
                  <span>
                    <i class="fa fa-upload"></i>&nbsp; Upload Attachment
                  </span>
                </label>
              </div>
              <p class="note-p" id="uploadFile"></p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
