import { useState } from 'react';
import { FriendType } from './types';
import Button from './Button';

type SplitBillFormProps = {
  selectedFriend: FriendType | undefined;
  handleNewBalanceOwed: (id: number, balance: number) => void;
};
const SplitBillForm: React.FC<SplitBillFormProps> = ({
  selectedFriend,
  handleNewBalanceOwed,
}) => {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [payedBy, setPayedBy] = useState('user');
  const friendExpense = billValue - yourExpense;

  const handleYourExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
    const expense = parseInt(e.target.value);
    if (expense > billValue) {
      return;
    }
    setYourExpense(expense);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (payedBy === 'user') {
      handleNewBalanceOwed(selectedFriend!.id, friendExpense);
    } else {
      handleNewBalanceOwed(selectedFriend!.id, -yourExpense);
    }
    setBillValue(0);
    setYourExpense(0);
    setPayedBy('user');
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split bill with a friend</h2>

      <label>Bill Value</label>
      <input
        type='number'
        value={billValue}
        onChange={(e) => setBillValue(+e.target.value)}
      />

      <label>Your expense</label>
      <input type='number' value={yourExpense} onChange={handleYourExpense} />

      <label>{selectedFriend?.name}'s expense</label>
      <input type='number' disabled value={friendExpense} />

      <label>Who is paying the bill</label>
      <select value={payedBy} onChange={(e) => setPayedBy(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend?.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBillForm;
