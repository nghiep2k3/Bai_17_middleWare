import React, { useEffect } from 'react';
import {useDispatch, useSelector} from'react-redux';
import { fetchTodoListAction } from './store/todo/slide';

export default function Admin(){
   const dispatch = useDispatch();
   const {loading} = useSelector(state => state.todo);

   useEffect(()=>{
    dispatch(fetchTodoListAction(
        {
            _pages: 1,
            _limit: 10
        }
    ));
   },[dispatch]);

    return(
        <div>
           Home

        </div>
    )
}