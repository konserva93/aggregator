import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 5px;
  `;

const Item = styled.div`
    display: flex;
    justify-content: center;
    padding: .5rem;
    color: ${props => props.color};
    font-size: ${props => `${props.size}px`};
  `;

export function Layout(props) {
  const foo = new Array(15);
  let items = [];
  for (let i = 0; i < foo.length; i++) {
    items.push(i);
  }

  return (
    <Grid columns={props.columns}>
      {items.map((item, index) => {
        return <Item
          key={index}
          color={index % 2 === 0 ? '#000' : '#cdcdcd'}
          size={Math.floor(index / props.columns) % 2 === 0 ? 16 : 24}
        >
          {item}
        </Item>;
      })}
    </Grid>
  );
}