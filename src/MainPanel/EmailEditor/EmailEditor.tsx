import React, { createRef, useRef } from "react";
import initView from "./example.json";

import Editor from "react-email-editor";
import { Button } from "../Button/Button";
import ReturnIcon from "../../icons/return.svg";
import SaveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";

export const EmailEditor: React.FC = (props) => {
  const emailEditorRef = useRef<Editor>(null);

  const exportHtml = () => {
    if (!emailEditorRef.current) return;
    emailEditorRef.current.exportHtml((data) => {
      const { design, html } = data;
      console.log(html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    emailEditorRef.current?.loadDesign(initView);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 50,
          background: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            flexGrow: 1,
            textAlign: "left",
            color: "#64676c",
            fontSize: 20,
            fontWeight: 600,
            padding: 20,
          }}
        >
          Email Creator
        </span>
        <div style={{ display: "flex", gap: 20, padding: 20 }}>
          <Button onClick={exportHtml}>
            <img
              style={{ height: 20, width: 20, display: "block" }}
              src={SaveIcon}
            />
          </Button>
          <Link to={"/"}>
            <Button>
              <img
                style={{ height: 20, width: 20, display: "block" }}
                src={ReturnIcon}
              />
            </Button>
          </Link>
        </div>
      </div>
      <Editor style={{}} ref={emailEditorRef} onLoad={onLoad} />
    </div>
  );
};
