import React from 'react';
import styled from 'styled-components';

const reqSvgs = require.context('./svg/partners', true, /\.svg$/);
const svgs = reqSvgs
  .keys()
  .map(path => ({ path, file: reqSvgs(path) }));

const Grid = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  -ms-grid-columns: (1fr)[${props => props.columns}];
  grid-template-rows: repeat(${props => props.rows}, 150px);
  -ms-grid-rows: (150px)[${props => props.rows}];
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  -ms-grid-row: ${props => props.row + 1};
  -ms-grid-column: ${props => props.column + 1};
`;

const Image = styled.img`
  width: ${props => props.size || '100%'};
  height: ${props => props.size || '100%'};
`;

export function Layout(props) {
  return (
    <Grid columns={props.columns} rows={Math.floor(svgs.length / props.columns) + (svgs.length % props.columns)}>
      {svgs.map((item, index) => {
        return <Item
          key={index}
          row={Math.floor(index / props.columns)}
          column={index % props.columns}
          color={index % 2 === 0 ? '#fff' : '#cdcdcd'}
        >
          <Image
            src={item.file.default}
            className="test"
            size={Math.floor(index / props.columns) % 2 === 0 ? '75%' : '100%'}
          />
        </Item>;
      })}
    </Grid>
  );
}