import React from 'react';

export default {
  title: 'tailwindcss/Form',
};

const InputForm = ({ label }: { label: string }) => {
  return (
    <label>
      <div className='text-gray-600'>{label}</div>
      <input
        type='text'
        className='w-full transition mt-1 rounded border-gray-300'
      />
    </label>
  );
};

const Form = () => {
  return (
    <div className='p-4 grid grid-cols-1 gap-4 w-1/3'>
      <InputForm label='Name'></InputForm>
      <InputForm label='Address'></InputForm>
      <InputForm label='Age'></InputForm>

      <div className='grid grid-cols-3'>
        <label className='inline-flex items-center'>
          <input type='checkbox' className='rounded focus:ring-0' />
          <span className='pl-2'>Option 1</span>
        </label>
        <label className='inline-flex items-center'>
          <input type='checkbox' className='rounded focus:ring-0' />
          <span className='pl-2'>Option 2</span>
        </label>
        <label className='inline-flex items-center'>
          <input type='checkbox' className='rounded focus:ring-0' />
          <span className='pl-2'>Option 3</span>
        </label>
      </div>
    </div>
  );
};

export const Default = Form.bind({});
