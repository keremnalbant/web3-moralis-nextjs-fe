import React, { useState } from "react";
import { useMoralis } from "react-moralis";

type SendMessageProps = {
  setState: any;
};

const SendMessage = ({ setState }: SendMessageProps) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e: any) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages"); //table in mongo
    const messages = new Messages(); //instance of table
    messages
      .save({
        message: message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        (message: any) => {},
        (error: any) => {
          console.log(error.message);
        }
      );
    setMessage("");
    setTimeout(() => {
      setState((state: any) => state + 1);
    }, 200);
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        placeholder="Enter a message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      ></button>
    </form>
  );
};

export default SendMessage;
