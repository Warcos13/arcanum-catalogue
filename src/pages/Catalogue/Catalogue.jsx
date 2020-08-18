import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import classes from './Catalogue.module.css';
import Product from '../../components/Product/Product'

const diceTest = [
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1lY4CndlpgD4t35r7Xlg0WjTNP0MwpHap',
    price: '15.000',
    name: 'RojoTanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 2,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1lY4CndlpgD4t35r7Xlg0WjTNP0MwpHap',
    price: '15.000',
    name: 'RojoTanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 2,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1lY4CndlpgD4t35r7Xlg0WjTNP0MwpHap',
    price: '15.000',
    name: 'RojoTanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 2,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1lY4CndlpgD4t35r7Xlg0WjTNP0MwpHap',
    price: '15.000',
    name: 'RojoTanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 2,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1lY4CndlpgD4t35r7Xlg0WjTNP0MwpHap',
    price: '15.000',
    name: 'RojoTanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 2,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
    price: '8.000',
    name: 'Azul Mate',
    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 10,
  },
  {
    avatar:
      'https://drive.google.com/uc?export=view&id=1a6I5h2qO9NAMrsvDPuOtaTowgorOyCiX',
    price: '12.000',
    name: 'Azul Tanslucido',

    description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
    aditionalInfo:
      '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
    inventory: 13,
  },
];

const Catalogue = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={classes.catalogueContainer}>
      <Card.Group doubling itemsPerRow={5} stackable>
        {diceTest.map((dice) => {
          return (
            <Product
              product={dice}
              loading={loading}
              key={dice.name + Math.random()}
            />
          );
        })}
      </Card.Group>
    </div>
  );
};

export default React.memo(Catalogue);
