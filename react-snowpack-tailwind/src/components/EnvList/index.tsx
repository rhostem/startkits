import React from 'react';

interface Props {}

const EnvList: React.FC<Props> = () => {
  return (
    <div className='block text-sm font-light px-10'>
      <h1>
        <code>import-meta</code>
      </h1>
      <div>
        <code className='font-bold'>env</code>
        <span className='ml-2'>
          SNOWspanACK_PUBLIC_API_URL={import.meta.env.SNOWPACK_PUBLIC_API_URL}
        </span>
      </div>
      <div>
        <code className='font-bold'>url</code>
        <span className='ml-2'>{import.meta.url}</span>
      </div>
    </div>
  );
};

export default EnvList;
