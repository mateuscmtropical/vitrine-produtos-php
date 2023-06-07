import { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter ";

const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost/admin/api/produtos");
      setProdutos(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost/admin/api/categorias");
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <CategoryFilter
        categorias={categorias}
        produtos={produtos}
        setFilteredProducts={setFilteredProducts}
      />

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        padding={4}
      >
        {filteredProducts.map((produto) => (
          <ProductCard
            key={produto.id}
            id={produto.id}
            produto={produto.produto}
            preco={produto.valor}
            imagem={produto.imagem}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
