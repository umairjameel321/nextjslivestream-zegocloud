"use client";

import dynamic from "next/dynamic";

const LiveStream = dynamic(() => import("@/components/LiveStream"), {
  ssr: false,
});

const RoomComponent = ({ roomid }: { roomid: string }) => {
  return <LiveStream roomid={roomid} />;
};

export default RoomComponent;
