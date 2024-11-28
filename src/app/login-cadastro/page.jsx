'use client';

import { useState } from 'react';

export default function Cadastro() {
  const [isLogin, setIsLogin] = useState(false); // Alterna entre cadastro e login

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl flex shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Lado esquerdo */}
        <div className="w-1/2 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-bold mb-4">{isLogin ? 'Bem-Vindo' : 'Bem-Vindo de volta'}</h2>
          <p className="text-sm mb-6">
            {isLogin
              ? 'Cadastre uma conta para você!'
              : 'Acesse sua conta agora mesmo'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition duration-300"
          >
            {isLogin ? 'Cadastrar-se' : 'Entrar'}
          </button>
        </div>

        {/* Lado direito */}
        <div className="w-1/2 bg-white p-8">
          <h2 className={`text-2xl font-bold mb-6 ${isLogin ? 'text-green-700' : 'text-gray-700'}`}>
            {isLogin ? 'Faça seu login' : 'Crie sua conta'}
          </h2>
          <form>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Sua senha"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmarSenha">
                  Confirmar Senha
                </label>
                <input
                  id="confirmarSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white py-2 px-4 rounded-lg hover:opacity-90 transition duration-300"
            >
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
