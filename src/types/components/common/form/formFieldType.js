import { string, bool, func } from 'prop-types';

// Form Field Type
export default {
  id: string,
  labelText: string,
  placeholder: string,
  name: string,
  type: string,
  value: string,
  error: string,
  useFullEventObj: bool,
  onChange: func.isRequired,
  className: string,
};
