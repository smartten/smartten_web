const languageData = {
  /************ ENGLISH **************/
  en: {
      title_adress: "Address",
      title_phone: "PHONE NUMBER",
      title_inquiries: "GENERAL INQUIRIES",
      title_business: "NEW BUSINESS",
      title_happen: "What happens next",
      title_help: "Let us know how we can help!",
      address: "F03 Ocean Park Building, No1 Dao Duy Anh, Phuong Mai, Dong Da, Hanoi, Vietnam",
      inquiries: "We don't have client or customers, we have partners. We leverage innovation towards digital transformation.",
      business: "Have something to say? Drop us a line. We offer big results with boutique-style relationships.",
      happens: "After we receive your request, one of our sales managers will contact you to clarify the details and arrange a meeting. We normally reply within one business day (or much sooner).\n" +
          "\n" +
          "Then, we'll schedule a call to discuss the details of your project.\n" +
          "\n" +
          "For video calls, we use Skype or Google Hangouts. If you prefer to use other software, just let us know. We'd be happy to make it work for both of us.",
      your_name: "Your Name",
      your_email: "Your Email",
      your_mobile: "Your Mobile",
      your_message: "Your Message",
      navigation:[{title:'home' ,linkUrl:'/'},
                {title:'about us' ,linkUrl:'/about-us'},
                {title:'services' ,linkUrl:'/services', hasChild:"has-child", childrenList: ["web development", "mobile app development", "ui/ux design", "digital marketing", "blockchain development", "it consultancy"]},
                {title:'solutions' ,linkUrl:'/solutions', hasChild:"has-child", childrenList: ["rummy app development", "fantasy app development", "smart contracts development company", "mlm software development company", "crm software development"] },
                {title:'blog' ,linkUrl:'/blog'},
                {title:'career' ,linkUrl:'/career'},
                {title:'contact us' ,linkUrl:'/contact-us'}
                ],
      bussiness:[{title:'general enquiries',mail:'info@smartten.com.vn', mobile:'(+84)24 6259 3698', phone:'Phone', icon:'pe-7s-phone'},
                {title:'bussiness enquires',mail:'business@smartten.com.vn', mobile:'(+84)24 6259 3698', phone:'Phone', icon:'pe-7s-chat'},
                {title:'recruitments',mail:'career@smartten.com.vn', mobile:'(+84)24 6259 3698', phone:'Phone', icon:'pe-7s-portfolio'}
              ],
      lang:"en",
    
  },
  /************ VietNam **************/
  vi: {
      title_adress: "Địa chỉ",
      title_phone: "Số điện thoại",
      title_inquiries: "Yêu cầu chung",
      title_business: "Doanh nghiệp mới",
      title_happen: "Chuyện gì tiếp theo",
      title_help: "Hãy cho chúng tôi biết chúng tôi có thể giúp gì được cho bạn!",
      address: "Số 1 Đào Duy Anh, Phương Mai, Đống Đa, Hà Nội",
      inquiries: "Chúng tôi không có người dùng hoặc khách hàng, chúng tôi có đối tác. Chúng tôi thúc đẩy sự đổi mới theo hướng chuyển đổi kỹ thuật số. ",
      business: "Để lại ý kiến của bạn. Chúng tôi mang lại kết quả tuyệt vời với các mối quan hệ theo phong cách cửa hàng.",
      happens: "Sau khi chúng tôi nhận được yêu cầu của bạn, một trong những người quản lý bán hàng của chúng tôi sẽ liên hệ với bạn để làm rõ chi tiết và sắp xếp một cuộc gặp. Chúng tôi thường trả lời trong vòng một ngày làm việc (hoặc sớm hơn nhiều).\n" +
          "\n" +
          "Sau đó, chúng tôi sẽ lên lịch một cuộc gọi để thảo luận về các chi tiết của dự án của bạn.\n" +
          "\n" +
          "Đối với các cuộc gọi điện video, chúng tôi sử dụng Skype hoặc Google Hangouts. Nếu bạn thích sử dụng phần mềm khác, chỉ cần cho chúng tôi biết. Chúng tôi rất vui khi làm cho nó hiệu quả với cả hai chúng tôi.",
      your_name: "Họ tên",
      your_email: "Địa chỉ email",
      your_mobile: "Số điện thoại",
      your_message: "Message",
      navigation:[{title:'trang chủ' ,linkUrl:'/'},
                {title:'về chúng tôi' ,linkUrl:'/about-us'},
                {title:'dịch vụ' ,linkUrl:'/services', hasChild:"has-child", childrenList: ["web development", "mobile app development", "ui/ux design", "digital marketing", "blockchain development", "it consultancy"]},
                {title:'giải pháp' ,linkUrl:'/solutions', hasChild:"has-child", childrenList: ["rummy app development", "fantasy app development", "smart contracts development company", "mlm software development company", "crm software development"] },
                {title:'blog' ,linkUrl:'/blog'},
                {title:'việc làm' ,linkUrl:'/career'},
                {title:'liên hệ' ,linkUrl:'/contact-us'}
              ],
      bussiness:[{title:'thắc mắc chung',mail:'info@smartten.com.vn', mobile:'(+84)24 6259 3698', phone:'Số điện thoại', icon:'pe-7s-phone'},
                {title:'yêu cầu kinh doanh',mail:'business@smartten.com.vn', mobile:'(+84)24 6259 3698', phone:'Số điện thoại', icon:'pe-7s-chat'},
                {title:'tuyển dụng',mail:'career@smartten.com.vn', mobile:'(+84)24 6259 3698', phone:'Số điện thoại', icon:'pe-7s-portfolio'}],
      lang:"vi",
  },
};

export default languageData;
