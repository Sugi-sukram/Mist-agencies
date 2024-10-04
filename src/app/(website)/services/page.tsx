"use client";
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    getService();
  }, []);
  const getService = async () => {
    try {
      const res = await fetch("/api/user"); // Ensure the route matches
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      console.log(res, data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return <div>qwsedrfgthjklzxcvbnm</div>;
}

export default page;
