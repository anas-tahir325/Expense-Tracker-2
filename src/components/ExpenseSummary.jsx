import React from 'react'
import { useExpenses } from '../context/Expensecontext'
import { formatCurrency, getExpensesbyCategory, getTotalExpenses } from '../utils/expenses';
import { TrendingDown, TrendingUp, Wallet } from 'lucide-react';

const ExpenseSummary = () => {

   const { expenses } = useExpenses();

   const totalExpenses = getTotalExpenses(expenses);
   const categoriesData = getExpensesbyCategory(expenses);

   let highestCategories = {
    name: "none",
    amount: 0,
   };

  Object.entries(categoriesData).forEach(([category,amount]) => {
   if(amount > highestCategories.amount) {
     highestCategories = { name: category, amount: amount };
   }
  });


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg'>
        <div className='flex items-center space-x-4'>
           <div className='bg-expense-light p-3 rounded-full'>
              <Wallet size={24} className='text-expense' />
           </div>
              <div>
                 <h3 className='text-sm font-medium text-gray-500'>
                  Total Expenses
                 </h3>
                   <p className='text-2xl font-bold text-expense-dark'>
                      {formatCurrency(totalExpenses)}
                   </p>
              </div>
              </div>
        </div>
      <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg'>
        <div className='flex items-center space-x-4'>
           <div className='bg-red-100 p-3 rounded-full'>
              <TrendingUp size={24} className='text-red-500' />
           </div>
              <div>
                 <h3 className='text-sm font-medium text-gray-500'>
                 Highest Category
                 </h3>
                   <p className='text-2xl font-bold text-expense-dark'>

                    {
                      highestCategories.name !== "none" ? (<>
                      <span className='capitalize'>
                       {highestCategories.name}
                       </span>
                      <span className='text-sm font-normal text-gray-500 ml-2'>
                      ({formatCurrency(highestCategories.amount)})
                      </span>
                      </>
                      ) : (
                         "None"
                      )}
                   </p>
                   </div>
                  </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg'>
        <div className='flex items-center space-x-4'>
           <div className='bg-green-100 p-3 rounded-full'>
              <TrendingDown size={24} className='text-green-500' />
           </div>
              <div>
                 <h3 className='text-sm font-medium text-gray-500'>
                  Total Entries
                 </h3>
                   <p className='text-2xl font-bold text-expense-dark'>
                      {expenses.length}
                   </p>
              </div>
              </div>
        </div>
          </div>       
  );
};

export default ExpenseSummary
