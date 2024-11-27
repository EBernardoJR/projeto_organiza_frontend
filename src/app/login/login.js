"use client"; // Para habilitar o uso de hooks no Next.js App Router
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Função de envio do formulário
  const handleLogin = async (e) => {
    e.preventDefault();

    // Regex para validar o formato do e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailRegex)) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (data.success) {
        setErrorMessage("");
        alert(`Bem-vindo, ${data.nome}!`); // Corrigindo o template literal
        router.push("/home"); // Redireciona para a página inicial após o login
      } else {
        setErrorMessage(data.message || "E-mail ou senha incorretos.");
      }
    } catch (error) {
      setErrorMessage("Erro ao se conectar ao servidor. Tente novamente.");
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <img src="/organiza investe.png" alt="Logo" style={logoStyle} />

        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="senha" style={labelStyle}>Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={inputStyle}
          />
        </div>

        {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}

        <div style={buttonContainerStyle}>
          <button type="submit" style={buttonStyle}>Entrar</button>
        </div>
      </form>
    </div>
  );
}

// Estilos para os elementos do formulário (mantendo os estilos fornecidos)
const containerStyle = {
  padding: "20px",
  maxWidth: "600px",
  margin: "auto",
  backgroundColor: "#4CAF50",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputGroupStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "5px",
  color: "#333",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "white",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const buttonStyle = {
  padding: "12px 24px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
};

buttonStyle[':hover'] = {
  backgroundColor: "#388E3C",
};

const logoStyle = {
  width: "120px",
  marginBottom: "20px",
};

const errorMessageStyle = {
  color: "red",
  fontSize: "14px",
  marginBottom: "10px",
};
