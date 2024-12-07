import RoomComponent from "@/components/RoomComponent";

const Room = async ({ params }: { params: Promise<{ roomid: string }> }) => {
  const roomid = (await params).roomid;
  return <RoomComponent roomid={roomid} />;
};

export default Room;
