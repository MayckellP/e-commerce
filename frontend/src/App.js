import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>List Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.image} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>
                    <b>{product.name}</b>
                  </p>
                </a>
                <p>
                  <b>${product.price}</b>
                </p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
