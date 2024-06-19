import { Avatar } from "./Avatar";

export default {
  title: "DubsUI/Avatar",
};

export const Primary = () => {
  return (
    <Avatar
      src="https://media.licdn.com/dms/image/D5603AQGyaRQSaQlBUQ/profile-displayphoto-shrink_800_800/0/1680320613439?e=1724284800&v=beta&t=vsuNgvqdkhJkrOX1GVthFIZug0QoeStm7407lDCkdAY"
      fallback="avatar"
    />
  );
};
