'use server';

import { auth } from '@clerk/nextjs/server';

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  //Check for input values
  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  //get logged in user
  const { userId } = auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const transactionData: TransactionData = {
    text,
    amount,
  };

  return { data: transactionData };
}

export default addTransaction;