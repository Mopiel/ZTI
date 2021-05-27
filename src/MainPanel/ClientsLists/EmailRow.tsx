import React, { useState } from "react";
import { Button, Form, Popconfirm, Table, Input, message, Upload } from "antd";
import "./Style.css";
import { Email } from ".";
import {
  useSetEmailAddressesMutation,
  useDeleteEmailMutation,
  useSendEmailMutation,
  useMyEmailsQuery,
  MyEmailsQuery,
} from "../../graphql";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { UploadOutlined } from "@ant-design/icons";

interface Props {
  email: Email;
  setEmail: (state: Email) => void;
}

type Data = MyEmailsQuery["myEmails"];

export const EmailRow: React.FC<Props> = (props) => {
  const { email, setEmail } = props;

  const [loading, setLoading] = useState(false);

  const [sendEmail] = useSendEmailMutation({ variables: { id: email.id } });

  const [deleteEmail] = useDeleteEmailMutation({
    variables: { id: email.id },
  });
  const [setAddresses] = useSetEmailAddressesMutation({
    variables: {
      id: email.id,
      name: email.name,
      mailingAddresses: email.mailingAddresses,
    },
  });

  const handleAdd = () => {};
  const data = email.mailingAddresses.map((name, key) => ({ key, name }));

  const columns = [
    {
      title: "Email Name",
      dataIndex: "name",
      editable: true,
      render: (_: any, record: { key: number; name: string }) => {
        return (
          <EmailName
            value={record.name}
            setValue={(newValue) => {
              const newEmails = [...email.mailingAddresses];
              newEmails[record.key] = newValue;
              setEmail({ ...email, mailingAddresses: newEmails });
            }}
          />
        );
      },
    },
    {
      title: "Delete Item",
      dataIndex: "operation",
      width: 150,
      render: (_: any, record: { key: number }) => (
        <Button
          onClick={() => {
            setEmail({
              ...email,
              mailingAddresses: email.mailingAddresses.filter(
                (_, key) => key !== record.key
              ),
            });
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            background: "#a6a6a690",
            zIndex: 100,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <ClipLoader size={300} color={"#123abc"} loading={true} />
          </div>
        </div>
      )}
      {email.html !== "" && (
        <div
          style={{ maxHeight: 500, width: "100%", overflow: "hidden" }}
          dangerouslySetInnerHTML={{ __html: email.html }}
        />
      )}
      <div style={{ height: 200, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            transition: "0.3s all",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
            color:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
            backdropFilter: "blur(2.5px)",
            borderRadius: 5,
            padding: 10,
          }}
        >
          <Input
            style={{
              fontSize: 36,
              background: "transparent",
              color: "inherit",
            }}
            bordered={false}
            value={email.name}
            onChange={(e) =>
              setEmail({
                ...email,
                name: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          paddingTop: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#e8d4bb",
        }}
      >
        <div style={{ margin: 10 }}></div>
        <div
          style={{
            width: "max(400px, 50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
              marginBottom: 20,
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={() => {
                setEmail({
                  ...email,
                  mailingAddresses: [...email.mailingAddresses, ""],
                });
              }}
              type="primary"
            >
              Add receiver
            </Button>
            <Popconfirm
              title="Do you want to send email to all Addressees?"
              onConfirm={async () => {
                setLoading(true);
                const req = await sendEmail();
                setLoading(false);
                if (req.data?.sendEmail) message.success("Email was send");
                else message.error("Could not send email");
              }}
            >
              <Button type="primary">Send Emails</Button>
            </Popconfirm>
            <Link to={`/Editor/${email.id}`}>
              <Button type={"link"} onClick={handleAdd}>
                Edit Email
              </Button>
            </Link>
            <Popconfirm
              title="Do you want to delete this email permanently?"
              onConfirm={async () => {
                const req = await deleteEmail();
                if (req.data?.deleteEmail)
                  message.success("Email was deleted correctly");
                else message.error("Could not delete email");
              }}
            >
              <Button type="ghost" danger style={{ background: "transparent" }}>
                Delete Email
              </Button>
            </Popconfirm>
          </div>
          <Input
            accept=".txt"
            type={"file"}
            onChange={(e) => {
              console.log(e.target.files);
              const files = e.target.files;
              const readFile = new FileReader();
              if (files) {
                for (let i = 0; i < files.length; i++) {
                  const file = files.item(i);
                  if (file) {
                    readFile.readAsText(file);
                    readFile.onload = (e) => {
                      const content = e?.target?.result;
                      const newEmails = content?.toString().split(/\r?\n/);
                      newEmails &&
                        setEmail({
                          ...email,
                          mailingAddresses: [
                            ...email.mailingAddresses,
                            ...newEmails,
                          ],
                        });
                    };
                  }
                }
              }
            }}
          />
          <Table dataSource={data} columns={columns} />
        </div>
        <Popconfirm
          title="Want to save all changes?"
          onConfirm={async () => {
            const req = await setAddresses();
            if (req.data?.setEmailUsers)
              message.success("Saved name and addresses");
            else message.error("Could not save name and addresses");
          }}
        >
          <Button style={{ margin: 20 }} type="primary">
            Save changes
          </Button>
        </Popconfirm>
      </div>
      <div style={{ height: 100, position: "relative" }} />
    </div>
  );
};

interface EmailNameProps {
  value: string;
  setValue: (state: string) => void;
}

const EmailName: React.FC<EmailNameProps> = (props) => {
  const { value, setValue } = props;
  const [editable, setEditable] = useState(false);
  return (
    <div
      onMouseEnter={() => setEditable(true)}
      onMouseLeave={() => setEditable(false)}
    >
      <Input
        value={value}
        style={{ borderColor: editable ? undefined : "transparent" }}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
