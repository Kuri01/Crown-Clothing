import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import {
  Preview,
  CategoryPreviewContainer,
  Title,
} from './category-preview.styles.jsx';
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title as='span' to={title}>
        {title.toUpperCase()}
      </Title>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
