import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const CreditPage = () => {
  return (
    <div>
      <TransactionForm type="credit" />
      <TransactionList type="credit" />
    </div>
  );
};

export default CreditPage;
