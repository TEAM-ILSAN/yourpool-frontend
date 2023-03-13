import { create } from 'zustand';
import { ChatRoomInitialState, ChatRoomState } from './chat-room.types';

const initialState: ChatRoomInitialState = {
  isTest: false,
};

export const useChatRoomStore = create<ChatRoomState>(set => ({
  ...initialState,
  toggleIsTest: () => set(({ isTest }) => ({ isTest: !isTest })),
}));
