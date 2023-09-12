import Bookmark from "../BookMark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
	return (
		<div className=" w-1/3 bg-gray-100 px-5 rounded-md">
			<div className="bg-indigo-100 rounded-md px-2 py-1 mt-2 text-indigo-800 font-semibold">
				<h3 className="text-2xl my-4">
					Total Reading Time: {readingTime}
				</h3>
			</div>

			<h1 className=" text-2xl my-4 text-center">
				Bookmarked Blog:{bookmarks.length}{" "}
			</h1>
			{bookmarks.map((bookmark, idx) => (
				<Bookmark key={idx} bookmark={bookmark}></Bookmark>
			))}
		</div>
	);
};

Bookmarks.propTypes = {
	bookmarks: PropTypes.array.isRequired,
	readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
