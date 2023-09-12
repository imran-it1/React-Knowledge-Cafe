import profile from "../../assets/images/profile.png";

const Header = () => {
	return (
		<div className=" container mx-auto">
			<div className="flex justify-between items-center mt-4">
				<h1 className="text-4xl font-bold">Knowledge Cafe</h1>
				<img src={profile} alt="profile-image" />
			</div>

			<div className="border-b-2 mt-5"></div>
		</div>
	);
};

Header.propTypes = {};

export default Header;
