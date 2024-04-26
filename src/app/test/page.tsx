"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  // console.log(data);

  return (
    <>
      {data?.results?.map((item: any) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt="asdsad"
            width={500}
            height={750}
            priority
          />
        </div>
      ))}
    </>
  );
}
