import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Product from "./Product";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    );
}
