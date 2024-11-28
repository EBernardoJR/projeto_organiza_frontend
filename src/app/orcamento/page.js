"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  const [categorias, setCategorias] = useState([
    { nome: "Alimentação", orcamento: 500, gasto: 450 },
    { nome: "Aluguel", orcamento: 1200, gasto: 1200 },
    { nome: "Entretenimento", orcamento: 300, gasto: 400 },
  ]);

  const [novaCategoria, setNovaCategoria] = useState({ nome: "", orcamento: 0, gasto: 0 });

  const adicionarCategoria = () => {
    if (novaCategoria.nome && novaCategoria.orcamento > 0) {
      setCategorias([...categorias, novaCategoria]);
      setNovaCategoria({ nome: "", orcamento: 0, gasto: 0 });
    }
  };

  const excluirCategoria = (nomeCategoria) => {
    setCategorias(categorias.filter((categoria) => categoria.nome !== nomeCategoria));
  };

  const dados = {
    labels: categorias.map((c) => c.nome),
    datasets: [
      {
        label: "Orçamento",
        data: categorias.map((c) => c.orcamento),
        backgroundColor: "rgba(102, 194, 164, 0.6)", // #66C2A4 (verde suave)
      },
      {
        label: "Gasto",
        data: categorias.map((c) => c.gasto),
        backgroundColor: "rgba(229, 115, 115, 0.6)", // #E57373 (vermelho suave)
      },
    ],
  };

  const opcoes = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Orçamento vs. Gasto" },
    },
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center gap-8 bg-white">
      <h1 className="text-2xl font-bold text-[#008259]">Controle de Orçamento</h1>

      {/* Formulário para adicionar categorias */}
      <div className="flex flex-col gap-4 w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Nome da Categoria"
          value={novaCategoria.nome}
          onChange={(e) => setNovaCategoria({ ...novaCategoria, nome: e.target.value })}
          className="border p-2 rounded bg-[#f1f7f5]"
        />
        <input
          type="number"
          placeholder="Valor Orçado"
          value={novaCategoria.orcamento}
          onChange={(e) => setNovaCategoria({ ...novaCategoria, orcamento: Number(e.target.value) })}
          className="border p-2 rounded bg-[#f1f7f5]"
        />
        <input
          type="number"
          placeholder="Valor Gasto"
          value={novaCategoria.gasto}
          onChange={(e) => setNovaCategoria({ ...novaCategoria, gasto: Number(e.target.value) })}
          className="border p-2 rounded bg-[#f1f7f5]"
        />
        <button
          onClick={adicionarCategoria}
          className="bg-[#00986c] text-white py-2 px-4 rounded hover:bg-[#2ca880]"
        >
          Adicionar Categoria
        </button>
      </div>

      {/* Exibir Categorias e Botão Excluir */}
      <div className="w-full max-w-md mt-8">
        {categorias.map((categoria, index) => (
          <div key={index} className="flex items-center justify-between p-2 border-b bg-white shadow-sm rounded-lg">
            <span className="text-[#008d62]">{categoria.nome} - Orçado: R${categoria.orcamento} - Gasto: R${categoria.gasto}</span>
            <button
              onClick={() => excluirCategoria(categoria.nome)}
              className="text-[#2ca880] hover:text-[#008259]"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>

      {/* Gráfico de Barras */}
      <div className="w-full max-w-3xl mt-8">
        <Bar data={dados} options={opcoes} />
      </div>
    </div>
  );
}
