const languageData = {
  /************ ENGLISH **************/
  en: {
    address: "F03 Ocean Park Building, No1 Dao Duy Anh, Phuong Mai, Dong Da, Hanoi, Vietnam",
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
    address: "Số 1 Đào Duy Anh, Phương Mai, Đống Đa, Hà Nội",
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
