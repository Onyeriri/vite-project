import React, { useState } from 'react'
import { useGlobalContext } from '../../context/context';
import { toast } from 'react-toastify';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const { setUserInput } = useGlobalContext();

    // handle form submission with user input
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // making sure a user doesn't submit an empty search term
        if (!value) {
            toast.error('Input can not be empty field');

            return;
        }

        // set user input state to user entered value
        setUserInput(value);
        setValue('');

    }

  return (
      <section>
          <form
              onSubmit={handleFormSubmit} className='search-form'
          >
              <input
                  type="text"
                  name="search"
                  placeholder='cat' 
                  className='form-input search-input'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
              <button
                  className='btn'
                  type="submit"
              >
                  search
              </button>
          </form>
    </section>
  )
}

export default SearchForm