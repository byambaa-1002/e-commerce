import { Dispatch, SetStateAction } from "react";

type Person = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;

  handleClick: () => void;
};

const User = ({ user, setUser, handleClick }: Person) => {
  const handleClickOne = () => {
    setUser("User");
  };
  return (
    <div>
      <div>{user}</div>
      <button onClick={handleClickOne}>Click1</button>
      <div></div>
      <button onClick={handleClick}>Click2</button>
    </div>
  );
};
export default User;
