import React, { useEffect, useState } from 'react';
import classes from './Admin.module.css';
import { setImageFile, uploadImage } from '../../helpers/firebase';
import { Form, Button, FormGroup, Select } from 'semantic-ui-react';
import { categoryOptions } from '../../constants/admin';
import Product from '../../components/Product/Product';

const Admin = ({ onSetProductInfo }) => {
  const fileInputRef = React.createRef();
  let imageSubscription;
  const initialProductValue = {
    name: '',
    category: '',
    subtitle: '',
    description: '',
    aditionalInfo: '',
    price: '',
    inventory: '',
    imageUrl: '',
  };

  useEffect(() => {
    setLocalImageUrl('');
    return () => {
      if (imageSubscription) imageSubscription.unsubscribe();
    };
  }, []);

  const [localImageUrl, setLocalImageUrl] = useState('');
  const [productInfo, setProductInfo] = useState(initialProductValue);

  const handleUploadSuccess = (url$) => {
    if (imageSubscription) {
      imageSubscription.unsubscribe();
    }
    imageSubscription = url$.subscribe((url) => {
      onSetProductInfo({ ...productInfo, imageUrl: url });      
      setLocalImageUrl('');
      setProductInfo(initialProductValue);
    });
  };

  const handleUploadProgress = (percentage) => {
    console.log('Progress', percentage);
  };

  const handleUploadError = (error) => {
    console.log('ERROR', error);
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageFile(image);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      console.log(reader.result);
      setLocalImageUrl(reader.result);
    };
  };

  const handleChange = (e, { name, value }) => {
    console.log(name, value);
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = () => {
    uploadImage(
      productInfo.category,
      handleUploadSuccess,
      handleUploadError,
      handleUploadProgress
    );
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group unstackable widths={3}>
          <Form.Input
            label="Nombre"
            name="name"
            autoComplete="off"
            placeholder="Nombre"
            value={productInfo.name}
            onChange={handleChange}
          />
          <Form.Field
            name="category"
            control={Select}
            options={categoryOptions}
            label={{
              children: 'Category',
              htmlFor: 'form-select-control-category',
            }}
            placeholder="Categoria"
            search
            searchInput={{ id: 'form-select-control-category' }}
            onChange={handleChange}
          />
          <Form.Input
            label="Subtitulo"
            name="subtitle"
            autoComplete="off"
            placeholder="Subtitulo"
            value={productInfo.subtitle}
            onChange={handleChange}
          />
        </Form.Group>
        <FormGroup unstackable widths={2}>
          <Form.Input
            label="Descripcion"
            name="description"
            autoComplete="off"
            placeholder="Descripcion"
            value={productInfo.description}
            onChange={handleChange}
          />
          <Form.Input
            label="Informacion Adicional"
            name="aditionalInfo"
            autoComplete="off"
            placeholder="Informacion Adicional"
            value={productInfo.aditionalInfo}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup unstackable widths={2}>
          <Form.Input
            label="Precio"
            name="price"
            autoComplete="off"
            placeholder="Precio"
            value={productInfo.price}
            onChange={(e, c) => {
              if (!isNaN(c.value)) handleChange(e, c);
            }}
          />
          <Form.Input
            label="Cantidad en Inventario"
            name="inventory"
            autoComplete="off"
            placeholder="Cantidad en inventario"
            value={productInfo.inventory}
            onChange={(e, c) => {
              if (!isNaN(c.value)) handleChange(e, c);
            }}
          />
        </FormGroup>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageAsFile}
        />
        <Button
          type="button"
          content="Seleccionar Imagen"
          labelPosition="left"
          icon="file"
          onClick={() => fileInputRef.current.click()}
        />
      </Form>
      <div className={classes.productPreview}>
        <h1>Preview</h1>
        <Product
          product={{
            name: productInfo.name || 'Nombre',
            category: productInfo.category || 'Categoria',
            subtitle: productInfo.subtitle || 'Subtitulo',
            description: productInfo.description || 'Descripcion',
            aditionalInfo: productInfo.aditionalInfo || 'Informacion Adicional',
            price: productInfo.price || '0000',
            inventory: productInfo.inventory || 0,
            imageUrl: localImageUrl||'https://plchldr.co/i/850x667',
          }}
          key={productInfo.name + Math.random()}
        />
        <Button
          className={classes.createBtn}
          type="button"
          onClick={handleSubmit}
        >
          Crear Producto
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Admin;
