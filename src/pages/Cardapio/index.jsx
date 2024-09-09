import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Itens } from '../../components/Itens';
import { Container, Perfil, Pedidos } from "./styles";
import SemItens from '../../components/SemItens';

function Cardapio({}) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:5000/produtos');
      const data = await response.json();
      setResultadoBusca(data);
      setCarregando(false);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setCarregando(false);
    }
  }

  const handleSearch = () => {
    const resultado = produtos.filter(produto =>
      produto.descricao.toLowerCase().includes(busca.toLowerCase())
    );
    setResultadoBusca(resultado);
  };

  const handleInputChange = (e) => {
    setBusca(e.target.value);
    setResultadoBusca([]); // Limpa o resultado da busca anterior
  };

  return (
    <Container>
      <Header />
      <Perfil>
       

        <div>
          <input 
            type="text" 
            id="search" 
            placeholder="Digite para buscar um item"
            onChange={handleInputChange}
            value={busca}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div>
        
        <p>Torne-se um cliente</p><a href="/administrador">acessando aqui</a>
        
        </div>
      </Perfil>
     
      {!carregando && resultadoBusca.length > 0 && (
        <Pedidos>
          {resultadoBusca.map(item => (
            <Itens
              key={item.id}
              imagem={item.imagem}
              nome={item.nome}
              preco={item.preco}
            />
          ))}
        </Pedidos>
      )}

    </Container>
  );
}

export default Cardapio;