import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "../Avatar";

type MessageProps = {
  message: any;
};

const Message = ({ message }: MessageProps) => {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user?.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar logout={() => {}} username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 px-3 py-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
    </div>
  );
};

export default Message;
