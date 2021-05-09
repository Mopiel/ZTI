import React, { useEffect, useRef, useState } from "react";
import { example } from "./example";
import EmailImg from "../../icons/christina-wocintechchat-com-68c8TlX5dfk-unsplash.jpg";
import LoginIcon from "../../icons/login.svg";
import CreateUserIcon from "../../icons/createUser.svg";
import { Link } from "react-router-dom";
import { Views } from "../../App";

interface Props {
  isAuth: boolean;
}

export const Homepage: React.FC<Props> = ({ isAuth }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "auto",
        overflowX: "hidden",
      }}
      onScroll={(e) => {
        setScrollPosition(e.currentTarget.scrollTop);
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url("${EmailImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: 36,
            color:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
            backdropFilter: "contrast(0.5)",
            borderRadius: 5,
            padding: 10,
          }}
        >
          Create your own advertising e-mail
        </div>
      </div>
      <div style={{ height: "50%", position: "relative" }} ref={divRef}>
        <div
          style={{
            position: "absolute",
            transition: "0.3s all",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,calc(-50% + ${
              (divRef.current?.offsetTop ?? 0) < scrollPosition + 400 ? 0 : 1000
            }px))`,
            fontSize: 36,
            color:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
            backdropFilter: "blur(2.5px)",
            borderRadius: 5,
            padding: 10,
          }}
        >
          Create creative advertisements
        </div>
      </div>
      <div
        style={{ height: "100%", width: "100%", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: example }}
      />
      {!isAuth && (
        <>
          <div style={{ height: "50%", position: "relative" }} />
          <div
            style={{
              padding: 100,
              backgroundColor: "white",
              display: "flex",
              flexWrap: "wrap",
              gap: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Link to={`/${Views.registration}`}>
                <div
                  style={{
                    width: 200,
                    padding: 50,
                    borderRadius: 5,
                    border: "black 1px solid",
                  }}
                >
                  <img src={CreateUserIcon} />
                  <span
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Register
                  </span>
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/${Views.login}`}>
                <div
                  style={{
                    width: 200,
                    padding: 50,
                    borderRadius: 5,
                    border: "black 1px solid",
                  }}
                >
                  <img src={LoginIcon} />
                  <span
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
