import { createContext, Dispatch, SetStateAction } from 'react';

interface ModalState {
  active: boolean;
  index: number;
}

export const ModalContext = createContext({
  modal: { active: false, index: 0 },
  setModal: (() => {}) as Dispatch<SetStateAction<ModalState>>
});
