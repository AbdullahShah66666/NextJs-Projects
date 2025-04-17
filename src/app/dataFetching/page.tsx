type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function dataFetching() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const usersFromWeb: User[] = await response.json();
  console.log(usersFromWeb);

  //include searchbar to filter the list of users
  const limitedUsers = usersFromWeb.slice(0, 3); //can fetch till 10 because mock json has 10 users' data
  return (
    <div className='bg-amber-500 flex flex-col items-center gap-2'>
      <h1 className='text-3xl text-center bg-amber-950'>Async Page</h1>
      <ul className='bg-white text-black flex flex-col gap-2 w-3/4 rounded-2xl'>
        {limitedUsers.map((user) => (
          <li
            key={user.id}
            className='rounded-2xl px-3 py-2 shadow-sm hover:shadow-2xl hover:px-2 hover:py-1 transition-all duration-300'
          >
            <div className='text-center font-normal text-2xl'>
              {user.username}
            </div>
            <div className='rounded-2xl px-2 py-2'>
              <div className='font-normal text-xl'>{user.name}</div>
              <div className='font-normal text-xl'>{user.id}</div>
              <div className='font-normal text-xl'>{user.email}</div>
              <div className='font-normal text-xl'>{user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
