"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  }, []);

  return (
    <div>
      <i>Home Page Boss = {process.env.NEXT_PUBLIC_API_URL}</i>
    </div>
  );
};

export default page;
