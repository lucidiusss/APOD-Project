import { useEffect, useState } from "react";
import Main from "./components/Main";
import axios from "axios";
import { DataProps } from "./types/data";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { AnimatePresence } from "motion/react";

function App() {
  const [data, setData] = useState<DataProps>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey) || "");
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await axios.get(url);
        const apiData = await res.data;
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err: any) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      <>
        {data ? <Main {...data} /> : <div>loading...</div>}
        <AnimatePresence>
          {showModal && data && (
            <Modal data={data} setShowModal={setShowModal} />
          )}
        </AnimatePresence>
        {data && (
          <Footer
            data={data}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        )}
      </>
    </>
  );
}

export default App;
