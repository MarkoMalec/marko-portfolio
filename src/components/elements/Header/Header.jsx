import React from "react";
import { useEffect, useState } from "react";
import { ReactDOM } from "react-dom/client";
import Sidebar from "../Sidebar/Sidebar";
import SmallLogo from "./SmallLogo";
import StrokeLogo from "./StrokeLogo";
import "./Header.scss";

export const Header = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 40 &&
          document.documentElement.scrollTop < 40
        ) {
          return false;
        }
        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={isShrunk ? "header-wrapper-shrunk" : "header-wrapper"}>
      <div className="container-main">
        <div className="header-content">
          <SmallLogo isShrunk={isShrunk} />
          <nav>
            <ul>
              <Sidebar />
            </ul>
          </nav>
          </div>
      </div>
    </div>
  );
};

export default Header;
