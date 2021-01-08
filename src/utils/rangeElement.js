import { cloneElement } from 'react';
import _ from 'lodash';

export default (options = {}, element) => {
  const { start, end = 1 } = options;

  return _.range(start, end).map(key => cloneElement(element, { key }));
};
