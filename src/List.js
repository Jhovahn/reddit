import React from 'react';
import Item from './Item';

const List = props => (
  <div>
    {console.log('list', props)}
    <Item />
  </div>
);

export default List;
