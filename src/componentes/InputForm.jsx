import PropTypes from 'prop-types'
import { useState } from 'react';

export const InputForm = ({ placeholder, onInputSubmit }) => {
  const [target, setTarget] = useState('')

  const handleSubmit = (e) => { 
    e.preventDefault();
    const newCategory = target.trim();
    if (newCategory.length <= 1) return;
    onInputSubmit(newCategory);
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label='form'>
      <input
        type="text"
        className="form__input"
        placeholder={placeholder}
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
    </form>
  )
}

InputForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInputSubmit: PropTypes.func.isRequired
}