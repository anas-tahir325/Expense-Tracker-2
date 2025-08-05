import React, { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { getChartData, getExpensesbyMonth } from '../utils/expenses';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartPieIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import ExpensePieChart from './ExpensePieChart';
import ExpenseBarChart from './ExpenseBarChart';

const ExpenseChart = () => {
  const { expenses } = useExpenses();
  const [chartType, setChartType] = useState("pie");

  const chartData = getChartData(expenses);


  const monthlyData = getExpensesbyMonth(expenses);

  if(expenses.length === 0) {
    return <div className='bg-white rounded-lg text-center shadow-md p-6'>
      <h2 className='text-2xl font-semibold text-expense-dark mb-4'>Expense Analytics</h2>

       <div className='flex justify-center mb-6 space-x-4'>
        <button 
          onClick={() => setChartType("pie")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "pie" ? "bg-expense text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <ChartPieIcon className='mr-2 w-5 h-5 text-white' />
          <span>Pie chart</span>
        </button>

        <button 
          onClick={() => setChartType("bar")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "bar" ? "bg-expense text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <ChartBarIcon className='mr-2 w-5 h-5 text-white' />
          <span>Bar chart</span>
        </button>
      </div>
      <p className='text-gray-500'>Add some expenses to see your spending analytics</p>
    </div>
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-semibold text-expense-dark mb-4'>Expense Analytics</h2>

      <div className='flex justify-center mb-6 space-x-4'>
        <button 
          onClick={() => setChartType("pie")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "pie" ? "bg-expense text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <ChartPieIcon className='mr-2 w-5 h-5' />
          <span>Pie chart</span>
        </button>

        <button 
          onClick={() => setChartType("bar")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "bar" ? "bg-expense text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <ChartBarIcon className='mr-2 w-5 h-5' />
          <span>Bar chart</span>
        </button>
      </div>
      
      <div>
       {
        chartType === "pie" ? 
        <ExpensePieChart data={chartData}
         />
         : <ExpenseBarChart data={monthlyData} />
       }
      </div>


    </div>
  );
};

export default ExpenseChart;
