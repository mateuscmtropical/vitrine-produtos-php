import React, { useState } from "react";
import { Select, Center, Text, Box } from "@chakra-ui/react";

const CategoryFilter = ({ categorias, produtos, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (!category || !category.length) {
      setFilteredProducts(produtos);
    } else {
      const filteredProducts = produtos.filter(
        (produto) => produto.categorias_id.toString() === category
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const isCategoryEmpty = selectedCategory && produtos.length === 0;

  return (
    <Box p={4}>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Selecione uma categoria"
      >
        <option value="">Todos</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.categoria}
          </option>
        ))}
      </Select>

      {isCategoryEmpty && (
        <Center mt={4}>
          <Text fontSize="xl" fontWeight="bold">
            A categoria selecionada não possui produtos.
          </Text>
        </Center>
      )}
  </Box>
  );
};

export default CategoryFilter;
