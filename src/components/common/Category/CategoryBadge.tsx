import React from 'react';
import styled from '@emotion/native';
import {CategoryItem} from '@/types/category';
import {DynamicIcon} from '@/components/common';
import {zIndexes, borderRadiuses} from '@/styles/theme';

interface CategoryBadgeProps extends CategoryItem {
  onClick: () => void;
}

const CategoryBadge = ({color, label, onClick}: CategoryBadgeProps) => {
  return (
    <CategoryBadgeContainer color={color} onPress={onClick}>
      <DynamicIcon iconName={label} />
      <TintedBackground color={color} />
    </CategoryBadgeContainer>
  );
};

export default CategoryBadge;

const CategoryBadgeContainer = styled.TouchableOpacity<{color: string}>`
  justify-content: center;
  align-items: center;
  position: relative;

  width: 5rem;
  height: 5rem;
  border-radius: ${borderRadiuses.circle};

  > svg {
    z-index: ${zIndexes.default};

    path {
      fill: ${({color}) => color};
    }
  }
`;

const TintedBackground = styled.View<{color: string}>`
  position: absolute;
  filter: brightness(1.5);
  background-color: ${({color}) => color};
  width: 100%;
  height: 100%;
`;
