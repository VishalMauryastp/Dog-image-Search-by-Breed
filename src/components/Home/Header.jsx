import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const BaseUrl = import.meta.env.VITE_List_of_all_breed;

const Header = ({ setKeyword, keyword }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "Get",
      url: `${BaseUrl}`,
    })
      .then((result) => {
        var as = Object.keys(result.data.message).map((key) => [key]);
        console.log(as);
        setData(as);
        toast.success("Seaching done");
      })
      .catch((err) => {
        toast.error(`some problem in loading the result / ${err}`);
      });
  }, []);
  console.log(data);
  return (
    <div className="">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-semibold">Dog Breeds</h1>
        </div>
        <div>
          <img src="/heart-red-icon.svg" alt="loading..." />
        </div>
      </div>
      <div className=" flex mt-8 bg-[#F7F7F7]  rounded-[4px] ">
        <input
          className="w-full outline-none px-3 bg-transparent"
          placeholder="search hear ..."
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button className="flex  bg-[#0794E3] text-white font-bold text-[14px]  px-6 py-3 gap-2  rounded-[4px] ">
          <img src="/Search.svg" alt="loading..." />
          Search
        </button>
      </div>
      <div className="">
        {data.filter((item)=>{
          return item.includes(keyword)
        }).map((val, i) => {
          return <NavLink className={`block`}>{val}</NavLink>;
        })}
      </div>
    </div>
  );
};

export default Header;
