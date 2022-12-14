import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./styles.scss";
export default function Navigation() {
	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to={"/"}>
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to={"/shop"}>
						SHOP
					</Link>
					<Link className="nav-link" to={"/login"}>
						LOGIN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
}
