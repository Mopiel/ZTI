import React, { useState } from "react";
import initView from "./example.json";

import Editor from "react-email-editor";
import { Button } from "../Button/Button";
import ReturnIcon from "../../icons/return.svg";
import SaveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";

interface Props {}

export const EmailEditor: React.FC<Props> = (props) => {
  const [emailEditorRef, setEditorRef] = useState<Editor>();

  const onLoad = () => {
    if (!emailEditorRef) return;
    emailEditorRef.loadDesign(initView);
  };

  const exportHtml = () => {
    if (!emailEditorRef) return;
    emailEditorRef.exportHtml((data) => {
      const { design, html } = data;
    });
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
      <Editor
        ref={(ref) => {
          if (ref) {
            setEditorRef(ref);
          }
        }}
        onLoad={onLoad}
      />
    </div>
  );
};
