import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readingTime, setReadingTime] = useState(0);

	const handleBookMark = (blog) => {
		setBookmarks([...bookmarks, blog]);
	};

	const handleMarkAsRead = (time, id) => {
		setReadingTime(readingTime + time);
		const remainingBookmarks = bookmarks.filter(
			(bookmark) => bookmark.id !== id,
		);
		setBookmarks(remainingBookmarks);
	};

	return (
		<>
			<Header></Header>
			<div className=" container mx-auto flex sm:flex-col lg:flex-row gap-20 mt-5 mb-5">
				<Blogs
					handleBookMark={handleBookMark}
					handleMarkAsRead={handleMarkAsRead}
				></Blogs>
				<Bookmarks
					bookmarks={bookmarks}
					handleMarkAsRead={handleMarkAsRead}
					readingTime={readingTime}
				></Bookmarks>
			</div>
		</>
	);
}

export default App;
