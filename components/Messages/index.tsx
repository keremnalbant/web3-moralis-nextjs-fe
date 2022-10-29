import React, { useEffect, useRef, useState } from "react";
import {
  ByMoralis,
  useMoralis,
  useMoralisQuery,
  useMoralisSubscription,
} from "react-moralis";
import Message from "../Message";
import SendMessage from "../SendMessage";

const MINS_DURATION = 15;

const Messages = () => {
  const [state, setState] = useState<number>(0);
  const { user } = useMoralis();
  const endOfMessagesRef = useRef<any>(null);
  const { fetch, data, isFetching, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  useEffect(() => {
    fetch();
    setTimeout(() => {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [state]);

  return (
    <div className="">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage setState={setState} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user?.getUsername()}! 🥳</p>
      </div>
    </div>
  );
};

export default Messages;
