import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
	// Destructure blog
	const {
		id,
		cover,
		author_img,
		author,
		posted_date,
		reading_time,
		title,
		hashtags,
	} = blog;

	return (
		<div>
			{/* Cover Image */}
			<div className="my-5">
				<img
					className=" w-full rounded-lg
                "
					src={cover}
					alt=""
				/>
			</div>
			<div className="flex justify-between mb-5">
				<div className=" flex items-center gap-4">
					{/* Author Img */}
					<div>
						<img className="w-[60px]" src={author_img} alt="" />
					</div>
					{/* Author & Date */}
					<div>
						<p>{author}</p>
						<p>{posted_date}</p>
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<p>{reading_time} min to read</p>
					<button
						onClick={() => handleBookMark(blog)}
						className="text-2xl text-red-600"
					>
						<FaBookmark></FaBookmark>
					</button>
				</div>
			</div>

			{/* Title */}
			<div className="mb-5">
				<p className=" text-6xl">{title}</p>
			</div>

			{/* HashTag */}

			{hashtags.map((hashtag, idx) => (
				<a className="text-gray-500 mr-2" key={idx}>
					#{hashtag}
				</a>
			))}

			<div className="mt-3">
				<a
					onClick={() => handleMarkAsRead(reading_time, id)}
					className=" underline text-blue-700 font-bold"
					href="#"
				>
					Mark as read
				</a>
			</div>
		</div>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	handleBookMark: PropTypes.func.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
