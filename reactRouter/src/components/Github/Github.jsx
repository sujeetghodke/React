import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/sujeetghodke")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="bg-gray-600 text-white text-3xl p-5">
      Username : {data.login}
      <br />
      Url : "{data.url}"
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
