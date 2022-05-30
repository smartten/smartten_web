const languageData = {
  /************ ENGLISH **************/
  en: {
    address: "701-702, Evershine Tower, Amrapali Circle, Vaishali Nagar, Jaipur- 30202",
    navigation:[{title:'home' ,linkUrl:'/'},
                {title:'about us' ,linkUrl:'/about-us'},
                {title:'services' ,linkUrl:'/services', hasChild:"has-child", childrenList: ["web development", "mobile app development", "ui/ux design", "digital marketing", "blockchain development", "it consultancy"]},
                {title:'solutions' ,linkUrl:'/solutions', hasChild:"has-child", childrenList: ["rummy app development", "fantasy app development", "smart contracts development company", "mlm software development company", "crm software development"] },
                {title:'blog' ,linkUrl:'/blog'},
                {title:'career' ,linkUrl:'/career'},
                {title:'contact us' ,linkUrl:'/contact-us'}
                ],
    bussiness:[{title:'general enquiries',mail:'info@volansoft.com', mobile:'+91 95493 26532', phone:'Mobile', icon:'fa-solid fa-mobile-screen'},
                {title:'bussiness enquires',mail:'business@volansoft.com', mobile:'+91 78911 21113', phone:'Mobile', icon:'fa-regular fa-message'},
                {title:'recruitments',mail:'career@volansoft.com', mobile:'+91 90241 95011', phone:'Mobile', icon:'fa-solid fa-suitcase'}
              ],
    lang:"en",
    
  },
  /************ VietNam **************/
  vi: {
    address: "Số 1 - Đào Duy Anh - Hà Nội",
    navigation:[{title:'trang chủ' ,linkUrl:'/'},
                {title:'về chúng tôi' ,linkUrl:'/about-us'},
                {title:'dịch vụ' ,linkUrl:'/services', hasChild:"has-child", childrenList: ["web development", "mobile app development", "ui/ux design", "digital marketing", "blockchain development", "it consultancy"]},
                {title:'giải pháp' ,linkUrl:'/solutions', hasChild:"has-child", childrenList: ["rummy app development", "fantasy app development", "smart contracts development company", "mlm software development company", "crm software development"] },
                {title:'blog' ,linkUrl:'/blog'},
                {title:'việc làm' ,linkUrl:'/career'},
                {title:'liên hệ' ,linkUrl:'/contact-us'}
              ],
    bussiness:[{title:'thắc mắc chung',mail:'info@volansoft.com', mobile:'+91 95493 26532', phone:'Số điện thoại', icon:'fa-solid fa-mobile-screen'},
                {title:'yêu cầu kinh doanh',mail:'business@volansoft.com', mobile:'+91 78911 21113', phone:'Số điện thoại', icon:'fa-regular fa-message'},
                {title:'tuyển dụng',mail:'career@volansoft.com', mobile:'+91 90241 95011', phone:'Số điện thoại', icon:'fa-solid fa-suitcase'}],
    lang:"vi",
  },
};

export default languageData;
