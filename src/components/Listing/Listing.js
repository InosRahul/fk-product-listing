import products from '../../data/products.json';
import { ProductCard } from 'components';
import {
  Grid,
  Button,
  Menu,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { useState } from 'react';
export const Listing = () => {
  let productData = products.products;
  const [productsData, setProductsData] = useState(productData);
  const [anchorElSize, setAnchorElSize] = useState(null);
  const [anchorElBrand, setAnchorElBrand] = useState(null);
  const [anchorElIdeal, setAnchorElIdeal] = useState(null);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [ideal, setIdeal] = useState([]);
  const sortHighToLow = () => {
    let data = [...productsData];
    data.sort((a, b) => b.price - a.price);
    setProductsData(data);
  };
  const sortLowToHigh = () => {
    let data = [...productsData];
    data.sort((a, b) => a.price - b.price);
    setProductsData(data);
  };

  const sizeClickHandler = e => {
    setAnchorElSize(e.currentTarget);
  };

  const sizeMenuCloseHandler = e => {
    setSizes([]);
    setAnchorElSize(null);
  };

  const brandClickHandler = e => {
    setAnchorElBrand(e.currentTarget);
  };

  const brandMenuCloseHandler = e => {
    setAnchorElBrand(null);
    setBrands([]);
  };

  const idealClickHandler = e => {
    setAnchorElIdeal(e.currentTarget);
  };

  const idealMenuCloseHandler = e => {
    setAnchorElIdeal(null);
  };

  const mapSizeCheckbox = () => {
    let sizeCheckboxes = productData.map(item => item.size);
    sizeCheckboxes = [...new Set(sizeCheckboxes)];
    return sizeCheckboxes;
  };

  const mapBrandCheckbox = () => {
    let brandCheckboxes = productData.map(item => item.brand);
    brandCheckboxes = [...new Set(brandCheckboxes)];
    return brandCheckboxes;
  };

  const mapIdealCheckbox = () => {
    let idealCheckboxes = productData.map(item => item.idealFor);
    idealCheckboxes = [...new Set(idealCheckboxes)];
    return idealCheckboxes;
  };

  const sortSize = e => {
    const sizesArr = sizes;
    let index;
    if (e.target.checked) {
      sizesArr.push(e.target.name);
      setSizes(sizesArr);
    } else {
      index = sizesArr.indexOf(e.target.name);
      sizesArr.splice(index, 1);
      setSizes(sizesArr);
    }

    let sortedSizesData = productData.filter(item =>
      sizesArr.includes(item.size),
    );

    sortedSizesData.length
      ? setProductsData(sortedSizesData)
      : setProductsData(productData);
  };

  const sortBrands = e => {
    const brandsArr = brands;
    let index;
    if (e.target.checked) {
      brandsArr.push(e.target.name);
      setBrands(brandsArr);
    } else {
      index = brandsArr.indexOf(e.target.name);
      brandsArr.splice(index, 1);
      setBrands(brandsArr);
    }

    let sortedBrandsData = productData.filter(item =>
      brandsArr.includes(item.brand),
    );

    sortedBrandsData.length
      ? setProductsData(sortedBrandsData)
      : setProductsData(productData);
  };

  const sortIdeals = e => {
    const idealsArr = ideal;
    let index;
    if (e.target.checked) {
      idealsArr.push(e.target.name);
      setIdeal(idealsArr);
    } else {
      index = idealsArr.indexOf(e.target.name);
      idealsArr.splice(index, 1);
      setIdeal(idealsArr);
    }

    let sortedIdealData = productData.filter(item =>
      idealsArr.includes(item.idealFor),
    );

    sortedIdealData.length
      ? setProductsData(sortedIdealData)
      : setProductsData(productData);
  };

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item>
          <Button variant="outlined" onClick={sortHighToLow}>
            Sort Price High to Low
          </Button>

          <Button variant="outlined" onClick={sortLowToHigh}>
            Sort Price Low to High
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={sizeClickHandler}
          >
            Sort - Sizes
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorElSize}
            keepMounted
            open={Boolean(anchorElSize)}
            onClose={sizeMenuCloseHandler}
          >
            {mapSizeCheckbox().map(size => (
              <MenuItem>
                <FormControlLabel
                  label={size}
                  control={
                    <Checkbox
                      className="author-checkbox"
                      onChange={sortSize}
                      name={size}
                    ></Checkbox>
                  }
                ></FormControlLabel>
              </MenuItem>
            ))}
          </Menu>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={brandClickHandler}
          >
            Sort - Brands
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorElBrand}
            keepMounted
            open={Boolean(anchorElBrand)}
            onClose={brandMenuCloseHandler}
          >
            {mapBrandCheckbox().map(brand => (
              <MenuItem>
                <FormControlLabel
                  label={brand}
                  control={
                    <Checkbox
                      className="author-checkbox"
                      onChange={sortBrands}
                      name={brand}
                    ></Checkbox>
                  }
                ></FormControlLabel>
              </MenuItem>
            ))}
          </Menu>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={idealClickHandler}
          >
            Ideal For
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorElIdeal}
            keepMounted
            open={Boolean(anchorElIdeal)}
            onClose={idealMenuCloseHandler}
          >
            {mapIdealCheckbox().map(ideal => (
              <MenuItem>
                <FormControlLabel
                  label={ideal}
                  control={
                    <Checkbox
                      className="author-checkbox"
                      onChange={sortIdeals}
                      name={ideal}
                    ></Checkbox>
                  }
                ></FormControlLabel>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {productsData.map(item => (
          <Grid item xs={4} key={item.id}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
