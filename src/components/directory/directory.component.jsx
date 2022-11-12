import React from 'react';
import DirectoryItem from '../directory-item/directory-item.components';
import './directory.styles.jsx';
import categories from './../categories/categories';
import { DirectoryContainer } from './directory.styles.jsx';

function Directory() {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
