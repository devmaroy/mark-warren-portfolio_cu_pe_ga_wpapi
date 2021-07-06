import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { connectSearchBox } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from '../form/Form';
import FormField from '../form/FormField';
import searchFormType from '../../../types/components/common/search/searchFormType';

const SearchForm = ({ placeholder, buttonIcon, currentRefinement, refine }) => {
  const [value, setValue] = useState('');
  const debouncedSearch = debounce((searchValue) => refine(searchValue), 500);

  const handleChange = (event) => {
    const { value: currentValue } = event.currentTarget;
    setValue(currentValue);
    debouncedSearch(currentValue);
  };

  const reset = () => {
    refine('');
    setValue('');
  };

  return (
    <Form
      name="search"
      className="form--2cols search-form"
      buttonDisabled={false}
      showButtonIcon
      buttonIcon={buttonIcon.sourceUrl}
      buttonClassName="button--primary"
      buttonDisableShadow
    >
      <FormField
        type="search"
        id="keywords"
        name="keywords"
        placeholder={placeholder}
        className="form-field__control--outline"
        useFullEventObj
        value={value}
        onChange={handleChange}
      />

      {currentRefinement && (
        <button type="button" onClick={reset} className="search-form__reset">
          <FontAwesomeIcon icon={['fas', 'times']} />
        </button>
      )}
    </Form>
  );
};

SearchForm.propTypes = {
  ...searchFormType,
};

const CustomSearchBox = connectSearchBox(SearchForm);

export default CustomSearchBox;
