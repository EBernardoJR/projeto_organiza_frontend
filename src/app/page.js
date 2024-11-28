"use client";

import React from "react";

export default function Notifications() {
  
  const addReminder = () => {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const description = document.getElementById("description").value;

    if (!title || !date) {
      alert("Título e data são obrigatórios.");
      return;
    }

    const reminderList = document.getElementById("reminder-list");
    const listItem = document.createElement("li");
    listItem.className =
      "flex flex-col sm:flex-row justify-between items-start sm:items-center bg-yellow-100 shadow-md p-4 rounded-lg border border-yellow-400 gap-2";

    listItem.innerHTML = `
      <div>
        <h3 class="font-bold text-green-900">${title}</h3>
        <p class="text-green-700">Data: ${date} ${time ? `às ${time}` : ""}</p>
        ${
          description
            ? `<p class="text-gray-700">${description}</p>`
            : `<p class="text-gray-500 italic">Sem descrição</p>`
        }
      </div>
      <button class="text-red-500 hover:text-red-700 self-start sm:self-center" onclick="this.parentElement.remove()">Remover</button>
    `;

    reminderList.appendChild(listItem);

    
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("description").value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 via-yellow-200 to-green-400 text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-6 text-green-900 text-center">
        Configurar Notificações e Lembretes
      </h1>

      
      <div className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg max-w-lg w-full border border-green-700">
        <input
          className="border border-green-500 rounded p-2 focus:outline-none focus:ring focus:ring-green-400"
          type="text"
          id="title"
          placeholder="Título do lembrete"
          required
        />
        <input
          className="border border-green-500 rounded p-2 focus:outline-none focus:ring focus:ring-green-400"
          type="date"
          id="date"
          required
        />
        <input
          className="border border-green-500 rounded p-2 focus:outline-none focus:ring focus:ring-green-400"
          type="time"
          id="time"
        />
        <textarea
          className="border border-green-500 rounded p-2 focus:outline-none focus:ring focus:ring-green-400"
          id="description"
          placeholder="Descrição (opcional)"
        ></textarea>
        <button
          onClick={addReminder}
          className="bg-green-500 text-white font-semibold p-2 rounded hover:bg-green-600"
        >
          Adicionar Lembrete
        </button>
      </div>

      
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-green-900 text-center">
          Lembretes Configurados
        </h2>
        <ul id="reminder-list" className="space-y-4"></ul>
      </div>
    </div>
  );
}
