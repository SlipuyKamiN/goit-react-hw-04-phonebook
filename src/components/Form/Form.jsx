import PropTypes from 'prop-types';
import {
  AppForm,
  FormInput,
  FormInputLabel,
  SubmitButton,
} from './Form.styled';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

export const ContactForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const nameID = nanoid();
  const numberID = nanoid();

  const validation = {
    name: {
      required: true,
      minLength: 4,
      pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    },
    number: {
      required: true,
      minLength: 7,
      maxLength: 10,
      pattern: '^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$',
    },
  };

  const handleFormSubmit = data => {
    onSubmit(data);
    reset({ name: '', number: '' });
  };

  return (
    <AppForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormInputLabel htmlFor={nameID}>Name</FormInputLabel>
      <FormInput
        type="text"
        {...register('name', validation.name)}
        id={nameID}
      />
      {/* <ErrMessage name="name" component="div" /> */}

      <FormInputLabel htmlFor={numberID}>Number</FormInputLabel>
      <FormInput
        type="text"
        {...register('number', validation.number)}
        id={numberID}
      />
      {/* <ErrMessage name="number" component="div" /> */}

      <SubmitButton type="submit">Submit</SubmitButton>
    </AppForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
