import React from 'react';
import Layout from '@theme/Layout';

export default function Button({ content }: ButtonProps) {
  return (
      <button className="bg-purple p-4 text-white border-4 rounded-md border-solid border-purple-light">
       {content}
      </button>
  );
}