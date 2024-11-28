'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [transactions, setTransactions] = useState([]) 
  // Lista de registros (receitas/despesas)
  const [form, setForm] = useState({ type: 'income', value: '', description: '', date: '' }) 
  // Estado do formulário
  const router = useRouter() // Inicializa o hook useRouter

  // Carrega as transações do localStorage ao montar o componente
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || []
    setTransactions(savedTransactions)
  }, [])

  // Função para adicionar ou editar uma transação
  const addTransaction = (e) => {
    e.preventDefault()
    if (!form.value || !form.description || !form.date) {
      alert('Todos os campos são obrigatórios')
      return
    }

    const newTransaction = {
      ...form,
      value: parseFloat(form.value),
      id: Date.now(),
    }

    const updatedTransactions = form.id
      ? transactions.map((transaction) => (transaction.id === form.id ? newTransaction : transaction))
      : [...transactions, newTransaction]

    setTransactions(updatedTransactions)

    localStorage.setItem('transactions', JSON.stringify(updatedTransactions))

    setForm({ type: 'income', value: '', description: '', date: '' })
  }

  // Função para editar uma transação
  const editTransaction = (id) => {
    const transactionToEdit = transactions.find((transaction) => transaction.id === id)
    setForm(transactionToEdit)
  }

  // Função para excluir uma transação
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id)
    setTransactions(updatedTransactions)
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
  }

  // Função para voltar para a página anterior
  const goBack = () => {
    router.back()
  }

  // Calcular o de receitas e despesas
  const calculateTotal = (type) => {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, curr) => acc + curr.value, 0)
      .toFixed(2)
  }

  return (
    <div className="h-screen mx-auto p-5 bg-gray-100 flex flex-col justify-start font-inter">
      {/* Cabeçalho */}
      <div className="header flex justify-between items-center bg-white p-4 rounded-md shadow-lg mb-6">
        <div className="flex items-center">
          <button
            onClick={goBack}
            className="text-gray-700 hover:text-gray-900 mr-4"
            aria-label="Voltar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold text-gray-700">Olá, seja bem-vindo(a) (Nome)</h1>
        </div>
        <div>
          <span className="text-sm text-gray-500">ao Organize Investimentos!</span>
        </div>
      </div>

     {/* Seção de receitas e despesas */}
<div className="financials flex justify-between mb-6">
  <div className="flex flex-col items-center w-1/2">
    <p className="text-green-500 text-xl">Receita mensal</p> 
    <p className="text-3xl font-bold text-gray-700">R$ {calculateTotal('income')}</p> 
  </div>
  <div className="flex flex-col items-center w-1/2">
    <p className="text-red-500 text-xl">Despesa mensal</p> 
    <p className="text-3xl font-bold text-gray-700">R$ {calculateTotal('expense')}</p> 
  </div>
</div>

      
      {/* Formulário de transações */}
      <form onSubmit={addTransaction} className="transaction-form mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="block text-lg text-gray-700 font-semibold">Tipo de Transação</label>
          <select
            className="w-full bg-[#E1DEDE] text-gray-700 p-2 border border-gray-300 rounded-md"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            disabled={!!form.id}
          >
            <option value="income">Receita</option>
            <option value="expense">Despesa</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="block text-lg text-gray-700 font-semibold">Valor</label>
          <input
            type="number"
            className="bg-[#E1DEDE] text-gray-700 w-full p-2 border border-gray-300 rounded-md"
            value={form.value}
            onChange={(e) => setForm({ ...form, value: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 block text-lg font-semibold">Descrição</label>
          <input
            type="text"
            className="bg-[#E1DEDE] text-gray-700 w-full p-2 border border-gray-300 rounded-md"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 block text-lg font-semibold">Data</label>
          <input
            type="date"
            className="bg-[#E1DEDE] text-gray-700 w-full p-2 border border-gray-300 rounded-md"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto p-3 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white font-semibold rounded-md"
          >
            {form.id ? 'Editar Registro' : 'Adicionar Registro'}
          </button>
        </div>
      </form>

      {/* Lista de transações */}
      <div className=" transactions mt-8">
        <h2 className="text-xl text-gray-700 font-semibold mb-4">Lista de Registros</h2>
        <ul className="space-y-4 ">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
            >
              <div>
                <p className="font-semibold text-gray-500">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div>
                <span
                  className={`font-bold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  R$ {transaction.value.toFixed(2)}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => editTransaction(transaction.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
