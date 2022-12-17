import { PropsWithChildren } from 'react';
import styled from '@emotion/native';
import { color } from '@/styles/theme';

interface LayoutProps {
  bgColor?: string;
}

function Layout({
  children,
  bgColor = color.primary,
}: PropsWithChildren<LayoutProps>) {
  return <StyledLayout bgColor={bgColor}>{children}</StyledLayout>;
}

const StyledLayout = styled.View<{ bgColor: string }>`
  padding: 3.6rem 2rem;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Layout;
