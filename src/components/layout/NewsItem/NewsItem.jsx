import Button from "../Button/Button";
import "./NewsItem.scss";

const NewsItem = ({ imgUrl, dateText, title, content }) => {
	return (
		<div className="NewsItem">
			<div className="NewsItemImg">
				<img src={imgUrl} alt="" className="ItemImg" />
				<div className="NewsItemInfo">
					<span className="ItemDateText">{dateText}</span>
					<span className="Admin">Admin</span>
				</div>
			</div>
			<div className="NewsItemMain">
				<h3 className="ItemTitle">{title}</h3>
				<p className="ItemContent">{content}</p>
				<Button color={"#fff"} padding="12px 16px" content={"Read more"} />
			</div>
		</div>
	);
};

export default NewsItem;
