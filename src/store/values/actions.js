export const CHANGE_VALUE = "VALUE::CHANGE_VALUE";
export const ZERO_CHAT_VALUE = "VALUE::ZERO_CHAT_VALUE";

export const createChangeValueChat = (idChat, value) => ({
  type: CHANGE_VALUE, 
  payload: {
    idChat,
    value,
  }
});

export const createZeroChatValue = (idChat) => ({
  type: ZERO_CHAT_VALUE, 
  payload: idChat,
});