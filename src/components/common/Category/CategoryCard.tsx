import React from 'react';
import styled from '@emotion/native';
import {CategoryItem} from '@/types/category';
import {DynamicIcon} from '@/components/common';
import {font, color, gutter, borderRadiuses} from '@/styles/theme';

interface CategoryCardProps extends CategoryItem {
  onClick?: () => void;
}

const CategoryCard = ({name, label, color, onClick}: CategoryCardProps) => {
  return (
    <CategoryCardContainer color={color} onPress={onClick}>
      <CategoryIconWrapper>
        <DynamicIcon iconName={label} />
      </CategoryIconWrapper>
      <CategoryName>{name}</CategoryName>
    </CategoryCardContainer>
  );
};

const CategoryCardContainer = styled.TouchableOpacity<{color: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${gutter.size8};
  width: 6.8rem;
  height: 8rem;
  border: 0.2rem solid ${({color}) => color};
  border-radius: ${borderRadiuses.large};
  background-color: ${color.lightgrey};
  color: ${({color}) => color};
`;

const CategoryIconWrapper = styled.View`
  margin-top: ${gutter.size8};
`;

const CategoryName = styled.Text`
  font-size: ${font.size16};
`;

export default CategoryCard;
