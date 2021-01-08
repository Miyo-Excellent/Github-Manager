import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import _ from 'lodash';
import { PageContainer } from 'styled';
import { Grid, TextField } from '@material-ui/core';
// import { emailValidation } from '../utils/validations';
import { useForm } from '../hooks';

export default () => {
  // const [dates, onChangeDates] = useState([new Date(), new Date()]);
  const [date, onChangeDate] = useState(new Date());

  const { values, handleInputChange, reset } = useForm({
    taskDate: '',
    taskMessage: '',
  });

  const { taskDate = '', taskMessage = '' } = values;

  const dateFormat = moment(date).format('DD-MM-YYYY');

  return (
    <PageContainer component="section">
      <Grid container>
        <Grid item xs={6}>
          <Calendar locale="es-ES" onChange={onChangeDate} value={date} />
        </Grid>

        <Grid container item xs={6} spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled
              name="taskDate"
              label="Task Date"
              // defaultValue=""
              value={dateFormat}
              helperText="Please enter the date of the assignment."
              error={_.isEmpty(dateFormat)}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline
              name="taskMessage"
              label="Task Message"
              // defaultValue=""
              helperText="Please enter the message of the assignment."
              error={_.isEmpty(taskMessage)}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
