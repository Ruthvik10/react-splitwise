import FriendItem from './FriendItem';
import { FriendType } from './types';

type FriendListProps = {
  friends: FriendType[];
  handleSelectedFriend: (id: number) => void;
  selectedFriend: FriendType | undefined;
};

const FriendsList: React.FC<FriendListProps> = ({
  friends,
  handleSelectedFriend,
  selectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
