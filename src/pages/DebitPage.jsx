import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const DebitPage = () => {
  return (
    <div>
      <TransactionForm type="debit" />
      <TransactionList type="debit" />
    </div>
  );
};

export default DebitPage;
