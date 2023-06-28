import React from 'react';
import Link from 'next/link';
import UserComp from '@/components/UserComp';
import UserTable from '@/components/UserTable';
import { getUsers } from '@/services/serviceCall';

const UserPage = async () => {
  const users = await getUsers();

  // console.log(users); //props


  return (
    <div>
      <UserComp users={users} />
      <UserTable />
      <Link href={'/'} className="bg-orange-500 px-8 py-1 text-lg ">
        Back
      </Link>
    </div>
  );
};

export default UserPage;
