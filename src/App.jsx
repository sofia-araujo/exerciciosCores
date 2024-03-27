import './App.css'

const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ]

const App = () => {
    const produtosFilter = produtos.filter(produto => Number(produto.preco.replace('R$ ', '')) > 1500)
        return (
            <>
                    {produtosFilter.map((produto) => (
                        <div key={produto.id}>
                            <h2>{produto.nome}</h2>
                            <p>Preco: {produto.preco}</p>
                            <ul>
                                {produto.cores.map((cor, index) => (
                                    <li className="cor" style={{backgroundColor: cor}} key={index}>{cor}</li>
                                ))}
                            </ul>
                        </div> 
                    ))}
            </>
        )
}

export default App