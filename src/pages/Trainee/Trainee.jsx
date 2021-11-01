import React, { useState } from 'react';
import { DataTable } from '../../Component';
import { AddDialog } from './component';
import trainees from './data/trainee';
import TraineeList from './TraineeList';

const Trainee = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [alltrainees, setAllTrainees] = useState(trainees);

  const handleSort = (field) => {
    if (order === 'asc') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }
    setOrderBy(field);
    const itemsToSort = JSON.parse(JSON.stringify(alltrainees));
    let sortedItems = [];
    let compareFn = null;
    switch (orderBy) {
    case 'name':
      compareFn = (first, second) => {
        if (first.name < second.name) {
          return order === 'asc' ? -1 : 1;
        }
        if (first.name > second.name) {
          return order === 'asc' ? 1 : -1;
        }
        return 0;
      };
      break;
    case 'email':
      compareFn = (first, second) => {
        if (first.email < second.email) {
          return order === 'asc' ? -1 : 1;
        }
        if (first.email > second.email) {
          return order === 'asc' ? 1 : -1;
        }
        return 0;
      };
      break;
    case 'createdAt':
      compareFn = (first, second) => {
        if (first.createdAt < second.createdAt) {
          return order === 'asc' ? -1 : 1;
        }
        if (first.createdAt > second.createdAt) {
          return order === 'asc' ? 1 : -1;
        }
        return 0;
      };
      break;
    default:
      break;
    }
    console.log('compareFn', compareFn);
    sortedItems = itemsToSort.sort(compareFn);
    setAllTrainees(sortedItems);
  };

  return (
    <div>
      <AddDialog />
      <DataTable
        trainees={alltrainees}
        id="data_table_id"
        column={[
          {
            field: 'name',
            label: 'Name',
            align: 'left',
          },
          {
            field: 'email',
            label: 'Email',
            align: 'left',
          },
          {
            field: 'createdAt',
            label: 'Date',
            align: 'right',
          },
        ]}
        onSort={handleSort}
        order={order}
        orderBy={orderBy}
      />
      <TraineeList trainees={trainees} />
    </div>
  );
};

export default Trainee;
