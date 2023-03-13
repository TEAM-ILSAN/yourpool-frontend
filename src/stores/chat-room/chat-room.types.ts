export interface ChatRoomInitialState {
  isTest: boolean;
}

export interface ChatRoomState extends ChatRoomInitialState {
  toggleIsTest: () => void;
}
