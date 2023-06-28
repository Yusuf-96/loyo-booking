'use client';
import { supabase } from '@/utils/supabaseClient';
import React, { useEffect, useState } from 'react';

const UserComp = ({ users }) => {
  const initialData = Object.freeze({
    room_number: '',
    room_type: '',
  });

  const [userData, setuserData] = useState(initialData);
  const [rooms, setRooms] = useState([]);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  // const { room_number, password } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('rooms')
      .insert([{ room_number: userData.room_number, room_type: userData.room_type }])
      .select();
  };

  const getRooms = async () => {
    let { data, error } = await supabase.from('rooms').select('*');
    setRooms(data);

  };
  console.log(rooms)

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className="py-6">
      <div className="flex flex-col mx-auto w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            name="room_type"
            type="text"
            value={userData.room_type || ''}
            onChange={handleChange}
            className="text-black mb-6 py-2.5 px-2"
          />
          <input
            name="room_number"
            type="number"
            value={userData.room_number || ''}
            onChange={handleChange}
            className="text-black mb-6 py-2.5 px-2"
          />
          <button className="bg-indigo-600 px-8 py-2 rounded">Submit</button>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 mx-auto">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Handle
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      key={index}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.website}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.username}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComp;
