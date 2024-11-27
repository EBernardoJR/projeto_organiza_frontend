export default function Cadastro() {
    return (
      <div style={containerStyle}>
        <div style={logoContainerStyle}>
          <img src="/organiza investe.png" alt="Logo" style={logoStyle} />
        </div>
  
        <form style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="nome" style={labelStyle}>Nome Completo</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required style={inputStyle} />
          </div>
  
          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required style={inputStyle} />
          </div>
  
          <div style={inputGroupStyle}>
            <label htmlFor="cpf" style={labelStyle}>CPF</label>
            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" required style={inputStyle} />
          </div>
  
          <div style={inputGroupStyle}>
            <label htmlFor="nascimento" style={labelStyle}>Data de Nascimento</label>
            <input type="date" id="nascimento" name="nascimento" required style={inputStyle} />
          </div>
  
          <div style={inputGroupStyle}>
            <label htmlFor="senha" style={labelStyle}>Criar Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Crie uma senha" required style={inputStyle} />
          </div>
  
          <div style={inputGroupStyle}>
            <label htmlFor="repetirSenha" style={labelStyle}>Repetir Senha</label>
            <input type="password" id="repetirSenha" name="repetirSenha" placeholder="Repita a senha" required style={inputStyle} />
          </div>
  
          <div style={buttonContainerStyle}>
            <button type="submit" style={buttonStyle}>Cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
  
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
  
  
  const formBackgroundStyle = {
    backgroundColor: "#b2dfdb", 
  };
  
  
  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px", 
  };
  
  
  const logoStyle = {
    width: "300px", 
    height: "auto", 
  };
  