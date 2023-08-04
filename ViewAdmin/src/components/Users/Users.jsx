import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/UsersActions';
import UserDropdown from './UserDropdown'


const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    console.log(users)

    useEffect(() => {
        dispatch(getAllUsers)
    }, [])


    return(
        <div>
            {
                users.users?.map(user => {
                    return (
                        <UserDropdown 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            Products={user.Products}
                        />
                    )
                })
            }
        </div>
        
    )
}   

export default Users;