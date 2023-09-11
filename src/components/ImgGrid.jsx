import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ImgGrid = ({ keyword }) => {
  console.log(keyword);
  const [data, setData] = useState([]);
  const BaseUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    axios({
      method: "Get",
      url: `${BaseUrl}`,
    })
      .then((result) => {
        setData(result.data.message);
        console.log();
        toast.success("Seaching done");
      })
      .catch((err) => {
        toast.error(`some problem in loading the result / ${err}`);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  mt-8">
      {data
        .filter((items) => {
          return keyword == "" ? items : items.includes(keyword);
        })
        .slice(0, 5)
        .map((val, i) => {
          return (
            <div key={i} className=" h-[400px]">
              <img className="w-full h-full" src={val} alt="loading..." />
            </div>
          );
        })}
    </div>
  );
};

export default ImgGrid;
