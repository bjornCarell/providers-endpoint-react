// import styled from 'styled-components';

// export const FlexContainer = styled.div.attrs(({
//     alignContent,
//     alignItems,
//     flexWrap,
//     justifyContent
// }) => ({
//     alignContent: alignContent || 'strech',
//     alignItems: alignItems || 'flex-start',
//     flexWrap: flexWrap || 'wrap',
//     justifyContent: justifyContent || 'flex-start',
// }))`
//     align-content: ${props => props.alignContent};
//     align-items: ${props => props.alignItems};
//     display: flex;
//     flex-direction: ${props => props.column ? 'column' : 'row'};
//     flex-wrap: ${props => props.flexWrap};
//     justify-content: ${props => props.justifyContent};
// `

// export const FlexItem = styled.div.attrs(({
//     alignContent,
//     alignItems,
//     flex,
//     justifyContent,
//     spacing,
//     theme
// }) => ({        
//     alignContent: alignContent || 'inherit',
//     alignItems: alignItems || 'inherit',
//     flex: flex || 1,
//     justifyContent: justifyContent || 'inherit',
//     spacing: spacing || theme.spacing.small,
// }))`
//     align-content: ${props => props.alignContent};
//     align-items: ${props => props.alignItems};
//     display: inherit;
//     flex: ${props => props.flex};
//     justify-content: ${props => props.justifyContent};
//     padding: ${props => (props.noPadding ? 0 : props.spacing)};
// `

// export const FlexColumn = styled(FlexItem).attrs(({
//     width
// }) => ({
//     width: width || '100%',
// }))`
//     width: ${props => props.width};
// `


/* 

Setting the props to 'inherit' as default for FlexItem lets us 
set all items via the FlexContainer. 

*/






















