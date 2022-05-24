import "./News.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import NewsItem from "../NewsItem/NewsItem";

const newsData = [
	{
		imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
		dataText: "17 Feb 2020",
		title: "Top Reasons to Choose Offshore App Developers",
		content:
			"As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
	},
	{
		imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
		dataText: "17 Feb 2020",
		title: "Top Reasons to Choose Offshore App Developers",
		content:
			"As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
	},
	{
		imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
		dataText: "17 Feb 2020",
		title: "Top Reasons to Choose Offshore App Developers",
		content:
			"As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
	},
	{
		imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
		dataText: "17 Feb 2020",
		title: "Top Reasons to Choose Offshore App Developers",
		content:
			"As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
	},
	{
		imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
		dataText: "17 Feb 2020",
		title: "Top Reasons to Choose Offshore App Developers",
		content:
			"As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
	},
	{
		imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
		dataText: "17 Feb 2020",
		title: "Top Reasons to Choose Offshore App Developers",
		content:
			"As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
	},
];

const News = () => {
	return (
		<div className="News">
			<div className="News-container">
				<h2 className="News-Title">Latest Blogs, News And Insights</h2>
				<Swiper
					slidesPerView={3}
					spaceBetween={56}
					slidesPerGroup={3}
					loop={true}
					navigation={true}
					modules={[Navigation]}
					className="mySwiper"
				>
					{newsData.map((data, index) => (
						<SwiperSlide key={index}>
							<NewsItem
								imgUrl={data.imgUrl}
								dateText={data.dataText}
								title={data.title}
								content={data.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default News;
