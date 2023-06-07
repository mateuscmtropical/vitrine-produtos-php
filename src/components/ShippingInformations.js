import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

function ShippingInfo() {
  const [cep, setCep] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [shippingCost, setShippingCost] = useState('');

  const handleInputChange = (event) => {
    setCep(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestValues = {
        sCepOrigem: '87302-080',
        sCepDestino: cep,
        nVlPeso: '2',
        nCdFormato: '10',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        sCdMaoPropria: 'N',
        nVlValorDeclarado: '50',
        sCdAvisoRecebimento: 'N',
        nCdServico: ['04014'],
      }

      const { data } = await axios.post('https://tools-shipping-calculator-api.herokuapp.com/api/calcula-preco-prazo', requestValues);

      const { PrazoEntrega, Valor } = data[0];

      setDeliveryTime(PrazoEntrega);
      setShippingCost(Valor.replace(',', '.'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box maxWidth="md" mx="auto" py={6}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={4}>
          <FormControl id="cep">
            <FormLabel>Calcule o frete e o prazo de entrega:</FormLabel>
            <Input
              type="text"
              value={cep}
              onChange={handleInputChange}
              placeholder="Digite o CEP de destino"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Calcular
          </Button>
        </Stack>
      </form>

      {deliveryTime && shippingCost && (
        <Box mt={4}>
          <Text>Prazo de Entrega: {deliveryTime} dias</Text>
          <Text>Custo do Frete: R${shippingCost}</Text>
        </Box>
      )}
    </Box>
  );
}

export default ShippingInfo;
