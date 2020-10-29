import { useState } from 'react';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = (nextValue) => {
    if (typeof nextValue !== 'undefined') {
      setValue(!!nextValue);
      return;
    }

    setValue(!value);
  };

  return [value, toggle];
}

export default useToggle;
