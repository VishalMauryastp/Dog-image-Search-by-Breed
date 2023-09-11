import React, { useState } from "react";
import {} from "react-icons";
import Header from "../../components/Home/Header";
import ImgGrid from "../../components/ImgGrid";

const Home = () => {
  const [keyword, SetKeyword] = useState("");
  return (
    <section className="w-full bg-gray-300 min-h-screen ">
      <div className="w-[80%] mx-auto bg-white p-[61px] min-h-screen ">
        <Header keyword={keyword} setKeyword={SetKeyword} />
        <ImgGrid keyword={keyword} />
      </div>
    </section>
  );
};

export default Home;
