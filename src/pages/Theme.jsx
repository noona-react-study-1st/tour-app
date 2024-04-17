import React, { useState, useEffect } from 'react';
import { useCateA01Query } from '../hooks/useCateA01';
import { useCateA02Query } from '../hooks/useCateA02';
import { useSubCateA01Query } from '../hooks/useSubCateA01';
import { useSubCateA02Query } from '../hooks/useSubCateA02';

const ThemePage = () => {
  const [selectedCat1, setSelectedCat1] = useState(null);
  const [selectedCat2, setSelectedCat2] = useState(null);

  const { data: categoriesA01 } = useCateA01Query();
  const { data: categoriesA02 } = useCateA02Query();
  const {
    data: subCategoriesA01,
    isLoading: isLoadingA01,
    isError: isErrorA01,
  } = useSubCateA01Query(selectedCat2);
  const {
    data: subCategoriesA02,
    isLoading: isLoadingA02,
    isError: isErrorA02,
  } = useSubCateA02Query(selectedCat2);

  if (isLoadingA01 || isLoadingA02) {
    <p>Loading 소분류</p>;
  }

  if (isErrorA01 || isErrorA02) {
    <p>Error fetching 소분류</p>;
  }

  const subCategories = selectedCat1?.startsWith('A01')
    ? subCategoriesA01
    : subCategoriesA02;

  useEffect(() => {
    console.log('Selected Main Category (cat1):', selectedCat1);
    console.log('Selected Sub Category (cat2):', selectedCat2);
  }, [selectedCat1, selectedCat2]);

  useEffect(() => {
    console.log('Categories from A01:', categoriesA01);
    console.log('Categories from A02:', categoriesA02);
  }, [categoriesA01, categoriesA02]);

  useEffect(() => {
    if (selectedCat1) {
      console.log('Sub-categories fetched:', subCategories);
    }
  }, [subCategories]);

  const handleCategoryClick = (code) => {
    console.log('Category clicked:', code);
    const mainCategory = code.substring(0, 3);
    setSelectedCat1(mainCategory);
    setSelectedCat2(code);
  };

  const handleSubCategoryClick = (cat2) => {
    console.log('Sub-category clicked:', cat2);
    setSelectedCat2(cat2);
  };

  return (
    <div>
      <h1>ThemePage</h1>
      <div>
        <h2>중분류</h2>
        {categoriesA01?.map((category) => (
          <button
            key={category.code}
            onClick={() => handleCategoryClick(category.code)}
          >
            {category.name}
          </button>
        ))}
        {categoriesA02?.map((category) => (
          <button
            key={category.code}
            onClick={() => handleCategoryClick(category.code)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCat1 && subCategories && (
        <div>
          <h2>소분류</h2>
          {subCategories.map((subCategory) => (
            <button
              key={subCategory.code}
              onClick={() => handleSubCategoryClick(subCategory.code)}
            >
              {subCategory.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemePage;
