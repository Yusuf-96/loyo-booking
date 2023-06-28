import React from 'react';
import Link from 'next/link';

const PageButton = () => {
  return (
    <div className="flex space-x-4">
      <button className="bg-rose-400 px-4 py-2 rounded-sm text-base font-semibold tracking-wider">
        <Link href={'user'}>User</Link>
      </button>
      <button className="bg-emerald-500 px-4 py-2 rounded-sm text-lg font-semibold tracking-wider">
        <Link href={'invoice'}>Invoice</Link>
      </button>
    </div>
  );
};

export default PageButton;
