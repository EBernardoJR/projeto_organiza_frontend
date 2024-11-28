import PieChart from '@/components/PieChart';
import React from 'react';
import Link from "next/link";
// import { Container } from './styles';

function painel() {

    const data = [{
        value: 1000,
        nome: "Compra no mercado",
        type: "despesa",

    }, 
    {
        value: 100640,
        nome: "Venda da bike",
        type: "receita",
        
    },
    {
        value: 166030,
        nome: "Compra no mercado",
        type: "despesa",
        
    }]

    function formatValue(value) {
        if (value === undefined) return null;
        // Formata o número para o formato brasileiro (R$)
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      }

  return <div className='bg-gray-300 pb-20'>
        <div style={{
            backgroundColor: "#4bb137",
            width: "100%",
            height: "80px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
        }}>
            <h1 className='font-bold'>Olá, Usuário</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                
            }}>
                <Link href="/orcamento">
                    <p className='mr-10 '>Orçamento</p>
                </Link>
                <Link href="/investimentos">
                    <p>Investimentos</p>
                </Link>
                
            </div>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16px"
    
        }}>
        <h2 style={{
            color: "#4bb137",
            fontSize: '24px',
            fontWeight: 'bold',
        }}>Painel de investimento</h2>
        </div>
        <div style={{
            marginLeft: "46px",
            marginRight: "46px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            minHeight: "200px",
            marginTop: "16px",
            paddingBottom: 40
        }}>
            <div style={{
                height: 360,
                margin: "0 10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 20,
                flexDirection: "row"
            }}>
                <PieChart />
                <div style={{
                    marginLeft: 20,
                    fontSize: 18,
                    color: "#666"
                }}>
                    <p className='pb-8'>Despesas <br /> <span className='text-red-500 font-bold'>R$ 7.899,39</span></p>
                    <p>Receitas <br /> <span className='text-green-500 font-bold'>R$ 7.899,39</span></p>
                </div>
                <div style={{
                flexDirection: 'row',
                display: "flex",
                width:'400px',
                margin: '20px auto',
                justifyContent: "space-around",
                marginTop: 20
            }}>
                <Link href="/receita">
                    <p className='bg-green-500 mr-2 font-bold p-4 rounded-[16px] opacity-100 hover:opacity-75 transition-opacity duration-300'>Nova receita</p>
                </Link>
                
                <Link href="/despesa">
                    <p className='bg-red-500 font-bold p-4 rounded-[16px] opacity-100 hover:opacity-75 transition-opacity duration-300'>Nova despesa</p>
                </Link>
            </div>
            </div>
            <div>
                <p className='text-gray-600 ml-10 mt-10 mb-10 text-2xl font-bold '>Seus items</p>
                {
                    data.map((item, index) => (
                        <div class="w-4/5 m-4 mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
                            <h3 class="text-lg font-semibold text-gray-900">{item.nome}</h3>
                            <p class={`text-${item.type == 'despesa'? 'red' : 'green'}-500 text-xl font-bold mt-2`}>{formatValue(item.value)}</p>
                            <p class="text-gray-500 text-sm mt-1">28 de Novembro de 2024</p>
                        </div>
                    ))
                }
            </div>
        </div>
  </div>;
}

export default painel;