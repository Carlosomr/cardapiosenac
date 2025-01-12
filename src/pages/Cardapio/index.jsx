import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Itens } from '../../components/Itens';
import { Container, Perfil, Pedidos } from "./styles";
import SemItens from '../../components/SemItens';

function Cardapio() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch('https://api-steel-tau-36.vercel.app/itens');
      const data = await response.json();
      setProdutos(data);  // Certifique-se de que o estado dos produtos está sendo configurado
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s" alt="Logo da Pizzaria Senac" />
        <div>
          <strong>Pizzaria Senac</strong>
          <p>Aberto das 18h ás 00h</p>
        </div>
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

      </Perfil>
      

      {!carregando && resultadoBusca.length > 0 && (
        <Pedidos>
          {resultadoBusca.map(item => (
            <Itens
              key={item.id_produto} // Use a chave única
              imagem={item.img_url} // Ajuste os atributos para corresponder aos dados
              nome={item.nm_produto}
              preco={item.vl_item}
            />
          ))}
        </Pedidos>
      )}
    </Container>
  );
}

export default Cardapio;
