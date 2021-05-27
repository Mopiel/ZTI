import React, { useEffect, useState } from "react";
import "./Style.css";
import { EmailRow } from "./EmailRow";
import {
  useGetEmailsQuery,
  GetEmailsQuery,
  useCreateEmailMutation,
} from "../../graphql";
import { Popconfirm, Input, Button, message } from "antd";

interface Props {}

export type Email = GetEmailsQuery["myEmails"][0];

export const ClientsList: React.FC<Props> = (props) => {
  const [newEmailName, setNewEmailName] = useState("");
  const [createEmail] = useCreateEmailMutation({
    variables: { name: newEmailName },
  });
  const {} = props;

  const { data } = useGetEmailsQuery({ pollInterval: 500 });
  const emails = data?.myEmails;

  const [displayEmails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    if (emails) setEmails(emails);
  }, [emails]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      {displayEmails.map((email, key) => (
        <EmailRow
          email={email}
          setEmail={(email: Email) =>
            setEmails((emails) => {
              const newEmails = [...emails];
              newEmails[key] = email;
              return newEmails;
            })
          }
        />
      ))}
      <div>
        <Popconfirm
          okButtonProps={{ disabled: newEmailName === "" }}
          okText={"Create new Email"}
          cancelText={"Cancel"}
          title={
            <Input
              value={newEmailName}
              onChange={(e) => setNewEmailName(e.target.value)}
            />
          }
          onConfirm={async () => {
            const value = await createEmail();

            if (value.data?.createEmail) {
              message.success("Saved name and addresses");
              setNewEmailName("");
            } else message.error("Could not save name and addresses");
          }}
        >
          <Button type={"primary"} style={{ margin: 30 }}>
            Create new email
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};
