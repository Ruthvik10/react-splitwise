import { useState } from 'react';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import FriendsList from './FriendsList';
import SplitBillForm from './SplitBillForm';
import { FriendType } from './types';

const initialFriends: FriendType[] = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendType | undefined>(
    undefined
  );

  const handleAddFriend = (name: string, image: string) => {
    setFriends((friends) => [
      ...friends,
      { id: Date.now(), name, image, balance: 0 },
    ]);
  };

  const handleSelectedFriend = (id: number) => {
    const friend = friends.find((friend) => friend.id === id);
    if (friend === selectedFriend) {
      setSelectedFriend(undefined);
    } else {
      setSelectedFriend(undefined);
      setSelectedFriend(friend);
    }
  };

  const handleNewBalanceOwed = (id: number, newBalanceOwed: number) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + newBalanceOwed }
          : friend
      )
    );
    setSelectedFriend(undefined);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm handleAddFriend={handleAddFriend} />}
        <Button
          onClick={() => setShowAddFriend((showAddFriend) => !showAddFriend)}
        >
          {!showAddFriend ? 'Add Friend' : 'Close'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          handleNewBalanceOwed={handleNewBalanceOwed}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
};

export default App;
