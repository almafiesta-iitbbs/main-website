import React from "react";
import ComingSoon from "./../images/final/coming_soon.jpeg";
import Footer from "components/footers/FiveColumnWithInputForm";

export default function Workshops() {
  return (
    <>
      <img src={ComingSoon} style={{ width: "100%",objectFit: "cover" }} />
    </>
  );
}
