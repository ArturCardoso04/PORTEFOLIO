import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
