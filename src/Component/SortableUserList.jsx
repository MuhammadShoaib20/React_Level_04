import React, {useState} from 'react';



const SortableUserList = () => {
    const intialUser = [
    {id: 1  , name : 'Shoaib' , age:20},
    {id: 2  , name : 'Ahmed' , age:14},
    {id: 3  , name : 'Babar' , age:16},
    {id: 4  , name : 'Zain' , age:30},

];
    

    const [user , setUser] = useState (intialUser);
    
    const sortByName =()=>{
   const sorted =[...user].sort((a ,b )=> a.name.localeCompare(b.name)); 
   setUser(sorted);
    }
   const sortByAge = ()=> {
    const sorted =[...user].sort((a ,b )=> a.age - b.age);
    setUser(sorted);
   }
  return (
    <div>
        <h2>Sorted User List</h2>
        <button onClick={sortByName}>Sorted Name</button>
        <button onClick={sortByAge}>Sorted Age</button>

        <ul>
            {user.map(users =>(
            <li key={users.id}>
               <strong>{users.name}</strong> - Age: {users.age}

            </li>

            )

            )}
        </ul>
      
    </div>
  )
}

export default SortableUserList
