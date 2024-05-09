import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import React from "react";

function layout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default layout;
