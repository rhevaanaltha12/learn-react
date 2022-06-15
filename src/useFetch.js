import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useFetch(url) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const setting = async () => {
      try {
        const { data } = await axios.get(url);
        setList(data);
      } catch (error) {
        setList(error);
      }
    };
    setting();
  }, [url]);
  return { list };
}
