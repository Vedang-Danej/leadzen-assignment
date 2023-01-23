import React, { useEffect, useState } from 'react';
import ListItem from '../Components/ListItem';
import axios from 'axios';

const ItemListScreen = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const list = await axios.get('https://jsonplaceholder.typicode.com/users');

    // set data in the state
    setData(list.data);
  };

  //   get data
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <ListItem itemData={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemListScreen;
