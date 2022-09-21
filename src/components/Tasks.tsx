import React from 'react'
import {useRecoilValue} from 'recoil'
import {todoListState} from '../recoil/todoAtoms'
import {Task} from './Task'

export const Tasks: React.FC = () => {
    const todoList = useRecoilValue(todoListState)
    return (
        <div>
            {todoList.map((todoItem, index) => (
                <Task key={todoItem} id={todoItem} />
            ))}
        </div>
    )
}
