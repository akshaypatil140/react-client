import React from 'react';
import { AddDialog } from './component';
import trainees from './data/trainee';
import TraineeList from './TraineeList';

const Trainee = () => (
  <div>
    <AddDialog />
    <TraineeList trainees={trainees} />
  </div>
);

export default Trainee;
