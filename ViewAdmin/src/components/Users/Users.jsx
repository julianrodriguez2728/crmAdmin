import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/UsersActions';

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
                        <div>
                            <h1 style={{color: 'red'}}>{user.email}</h1>

                        </div>
                    )
                })
            }
        </div>
        
    )
}   

export default Users;