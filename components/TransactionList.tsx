import { Transaction } from '@/types/Transaction';

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          TransactionList.map((transaction: Transaction) => (
            <p>{transaction.text}</p>
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
