import React, { useEffect, useState } from "react";
import Editor from "react-email-editor";
import { Button } from "../Button/Button";
import ReturnIcon from "../../icons/return.svg";
import SaveIcon from "../../icons/save.svg";
import { RouteComponentProps } from "react-router-dom";
import {
  useGetEmailQuery,
  useSetEmailBodyMutation,
  GetEmailQuery,
} from "../../graphql";

interface Props extends RouteComponentProps<{ emailId: string }> {}

export const EmailEditor: React.FC<Props> = (props) => {
  const [emailEditorRef, setEditorRef] = useState<Editor>();
  const [setEmailBody] = useSetEmailBodyMutation();
  const { data } = useGetEmailQuery({
    variables: { id: props.match.params.emailId },
  });
  const emailBody = data?.getEmail;

  const loadData = (emailBody: NonNullable<GetEmailQuery["getEmail"]>) => {
    if (!emailEditorRef) return;
    try {
      emailEditorRef.loadDesign(JSON.parse(emailBody.design));
    } catch (error) {
      console.error(error);
    }
  };

  const exportHtml = () => {
    if (!emailEditorRef) return;
    emailEditorRef.exportHtml(async (data) => {
      const { design, html } = data;
      const graphqlReturn = await setEmailBody({
        variables: {
          id: props.match.params.emailId,
          design: JSON.stringify(design),
          html: html,
        },
      });
      console.log(
        graphqlReturn.data?.setEmailBody ? "Success" : "Something went wrong"
      );
    });
  };

  useEffect(() => {
    if (!emailEditorRef || !emailBody) return;
    loadData(emailBody);
  }, [emailBody, emailEditorRef]);

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
          <Button onClick={() => props.history.goBack()}>
            <img
              style={{ height: 20, width: 20, display: "block" }}
              src={ReturnIcon}
            />
          </Button>
        </div>
      </div>
      <Editor
        ref={(ref) => {
          if (ref) {
            setEditorRef(ref);
          }
        }}
      />
    </div>
  );
};
