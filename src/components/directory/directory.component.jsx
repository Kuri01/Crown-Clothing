import React from 'react';
import DirectoryItem from '../directory-item/directory-item.components';
import './directory.styles.scss';
import categories from './../categories/categories';

function Directory() {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
