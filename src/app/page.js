import Link from "next/link"; // Importação para navegação interna

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4", 
        minHeight: "100vh",
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Cabeçalho */}
      <header
        style={{
          background: "linear-gradient(90deg, #4CAF50, #2E7D32)",
          color: "white",
          width: "100%",
          padding: "20px 0",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ fontSize: "36px", margin: "0" }}>Organiza Investimentos</h1>
        <p style={{ fontSize: "20px", margin: "5px 0" }}>
          Transforme sua vida financeira com decisões inteligentes!
        </p>
      </header>

      {/* Botões com navegação */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <Link href="/cadastro">
          <button style={buttonStyle}>Cadastre-se</button>
        </Link>
        <Link href="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
      </div>

      {/* Introdução */}
      <section style={{ textAlign: "center", marginBottom: "40px", width: "80%" }}>
        <h2 style={{ fontSize: "32px", color: "#333" }}>Bem-vindo ao Mundo dos Investimentos</h2>
        <p style={{ fontSize: "20px", color: "#555", lineHeight: "1.8", marginBottom: "20px" }}>
          Invista no seu futuro e alcance seus objetivos financeiros. Aqui, oferecemos ferramentas, conhecimento e estratégias para que você
          possa começar sua jornada no universo dos investimentos com confiança.
        </p>
        <img
          src="/banner.png"
          alt="Banner de Investimentos"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        />
      </section>

      {/* Destaques */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
          width: "80%",
        }}
      >
        {highlights.map(({ image, title, description }, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFFFFF",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img src={image} alt={title} style={{ width: "150px", marginBottom: "15px" }} />
            <h3 style={{ color: "#4CAF50", marginBottom: "10px" }}>{title}</h3>
            <p style={{ color: "#555" }}>{description}</p>
          </div>
        ))}
      </section>

      {/* Gráfico */}
      <section style={{ textAlign: "center", marginBottom: "40px", width: "80%" }}>
        <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>Evolução Financeira</h2>
        <img
          src="/grafico.png"
          alt="Gráfico de Investimentos"
          style={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <p style={{ textAlign: "center", marginTop: "10px", color: "#777" }}>
          Visualize como seu dinheiro pode crescer com planejamento e disciplina.
        </p>
      </section>
    </div>
  );
}

// Estilo do botão
const buttonStyle = {
  padding: "15px 30px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
};

// Conteúdo dos destaques
const highlights = [
  {
    image: "/estrategia3.png",
    title: "Estratégias Inteligentes",
    description: "Descubra como planejar seus investimentos para maximizar seus rendimentos.",
  },
  {
    image: "/seguro.png",
    title: "Segurança",
    description: "Entenda como proteger seu capital e investir com confiança.",
  },
  {
    image: "/crescimento2.png",
    title: "Crescimento",
    description: "Aprenda a multiplicar seu patrimônio ao longo do tempo com retornos consistentes.",
  },
];