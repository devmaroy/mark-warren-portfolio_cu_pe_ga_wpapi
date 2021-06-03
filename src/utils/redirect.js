import { navigate } from 'gatsby';

export default (path = '') => {
  if (typeof window !== `undefined`) {
    navigate(path);
  }
};
