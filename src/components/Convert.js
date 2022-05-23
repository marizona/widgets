import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      undefined,
      {
        params: {
          q: text,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          target: language.value,
        },
      }
    );
  }, [language, text]);

  return <div/>;
};

export default Convert;
