import Button from './Button';
import { FriendType } from './types';

type FriendProps = {
  friend: FriendType;
  handleSelectedFriend: (id: number) => void;
  selectedFriend: FriendType | undefined;
};

const FriendItem: React.FC<FriendProps> = ({
  friend,
  handleSelectedFriend,
  selectedFriend,
}) => {
  let descriptionEl = null;
  if (friend.balance < 0) {
    descriptionEl = (
      <p className='red'>
        You owe {friend.name} ${Math.abs(friend.balance)}
      </p>
    );
  } else if (friend.balance > 0) {
    descriptionEl = (
      <p className='green'>
        {friend.name} owes you ${friend.balance}
      </p>
    );
  } else {
    descriptionEl = <p>You and {friend.name} are even</p>;
  }
  return (
    <li className={selectedFriend?.id === friend.id ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {descriptionEl}
      <Button onClick={() => handleSelectedFriend(friend.id)}>
        {selectedFriend?.id === friend.id ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default FriendItem;
