import { useState } from 'react';
import Button from './Button';

type AddFriendFormProps = {
  handleAddFriend: (name: string, image: string) => void;
};

const AddFriendForm: React.FC<AddFriendFormProps> = ({ handleAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddFriend(name, image);
    setName('');
    setImage('https://i.pravatar.cc/48');
  }
  return (
    <form className='form-add-friend' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='name'>🦹Friend name</label>
      <input
        id='name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor='avatar'>🖼️Image Url</label>
      <input
        id='avatar'
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
