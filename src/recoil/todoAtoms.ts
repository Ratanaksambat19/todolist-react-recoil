import { atom, atomFamily, selector } from "recoil";

interface todoItem {
  id: number;
  label: string;
  isCompleted: boolean;
}

export const todoListState = atom<number[]>({
  key: 'todoListState',
  default: [],
});

export const todoItemState = atomFamily({
  key: 'todoItemState',
  default: {
    id: 0,
    label: '',
    isCompleted: false,
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => get(todoItemState(item)).isCompleted).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  }
})
