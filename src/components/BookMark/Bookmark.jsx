import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
	const { title } = bookmark;

	return (
		<div className="bg-white p-2 rounded-md mb-4">
			<h3 className="text-xl">{title}</h3>
		</div>
	);
};

Bookmark.propTypes = {
	bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
