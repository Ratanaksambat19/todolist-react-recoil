import React, {useState} from 'react'
import {useRecoilState, useSetRecoilState} from 'recoil'
import styled from 'styled-components'
import {todoItemState, todoListState} from '../recoil/todoAtoms'
import {Container as TaskContainer, TextStyle as TaskTextStyle} from './Task'

const InsertInput = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${TaskTextStyle};

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`

export const Input: React.FC = () => {
    const [label, setLabel] = useState('')
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const setTodoItem = useSetRecoilState(todoItemState(todoList.length))
    return (
        <TaskContainer>
            <InsertInput
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={label}
                onChange={({currentTarget}) => {
                    setLabel(currentTarget.value)
                }}
                onKeyUp={({keyCode}) => {
                    if (keyCode === 13 && label !== '') {
                        // Insert new task
                        setTodoList([...todoList, todoList.length])
                        setTodoItem({
                            id: todoList.length,
                            label,
                            isCompleted: false,
                        })
                        setLabel('')
                    }
                }}
            />
        </TaskContainer>
    )
}
