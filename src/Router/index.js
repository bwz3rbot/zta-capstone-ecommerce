import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Login from "./Login";
import Navigation from "./Navigation";
export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
