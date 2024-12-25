export const validate = (values) => {
  const errors = {};
  if (!values.section_name) {
    errors.section_name = "Required";
  }

  if (!values.items || !values.items.length) {
    errors.items = "At least one item is required";
  } else {
    const itemsArrayErrors = [];
    values.items.forEach((item, index) => {
      const itemErrors = {};
      if (!item.name) itemErrors.name = "Required";
      if (!item.price) itemErrors.price = "Required";
      if (itemErrors.name || itemErrors.price) {
        itemsArrayErrors[index] = itemErrors;
      }
    });
    if (itemsArrayErrors.length) {
      errors.items = itemsArrayErrors;
    }
  }
  return errors;
};
