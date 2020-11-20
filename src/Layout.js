import React from 'react';
import styled from 'styled-components';

const reqSvgs = require.context('./svg/partners', true, /\.svg$/);
const svgs = reqSvgs
  .keys()
  .map(path => ({ path, file: reqSvgs(path) }));

const Header = styled.div`
  text-align: center;
  font-size: 36px;
  color: #EBE5E6;
  margin-bottom: 48px;
`;

const Grid = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  -ms-grid-columns: (1fr)[${props => props.columns}];
  grid-template-rows: repeat(${props => props.rows}, 150px);
  -ms-grid-rows: (150px)[${props => props.rows}];
  width: 100%;
  background-color: #F1F7ED;
  max-width: 1138px;
  margin: 0 auto;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  width: 100%;
  height: 100%;
  -ms-grid-row: ${props => props.row + 1};
  -ms-grid-column: ${props => props.column + 1};
`;

const backgrounds = {
  transparent: 'rgba(0,0,0,0)',
  blue: 'linear-gradient(rgba(76, 102, 99, 0) 5%, rgba(76, 102, 99, .3), rgba(76, 102, 99, 0) 95%)',
}

export function Layout(props) {
  return (
    <>
      <Header>{'Наши партнеры'}</Header>
      <Grid columns={props.columns} rows={Math.floor(svgs.length / props.columns) + (svgs.length % props.columns)}>
        {svgs.map((item, index) => {
          const imgSize = Math.floor(index / props.columns) % 2 === 0 ? '75%' : '100%';
          return <Item
            key={index}
            row={Math.floor(index / props.columns)}
            column={index % props.columns}
            background={[1, 2].includes(Math.floor(index / props.columns)) ? '#C5CBC2' : backgrounds.transparent}
          >
            <img
              src={item.file.default}
              className="test"
              style={{ width: imgSize, height: imgSize }}
            />
          </Item>;
        })}
      </Grid>
    </>
  );
}