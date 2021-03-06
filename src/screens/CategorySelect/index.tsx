import React from "react";

import { Button } from "../../components/Form/Button";
import { ScreenDetailsTemplate } from "../../components/templates/ScreenDetailsTemplate";
import { categories } from "../../constants/categories";
import { Category } from "../../constants/categories/interface";

import { CategorySelectProps } from "./interface";

import {
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryName,
  Separator,
  Footer,
  RootView,
} from "./styles";

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: CategorySelectProps): JSX.Element {

  const handleCategoryItem = (category: Category) => {
    setCategory(category);
  }

  return (
    <ScreenDetailsTemplate title="Categorias" isModal>
      <RootView>
        <CategoryList
          data={categories}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <CategoryItem
              onPress={() => handleCategoryItem(item)}
              isActive={category.key === item.key}
            >
              <CategoryIcon name={item.icon} />
              <CategoryName>{item.title}</CategoryName>
            </CategoryItem>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />

        <Footer>
          <Button title="Selecionar" onPress={closeSelectCategory} />
        </Footer>
      </RootView>
    </ScreenDetailsTemplate>
  );
}