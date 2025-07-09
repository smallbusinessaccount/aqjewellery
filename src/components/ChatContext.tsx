// components/ChatContext.tsx
import { createContext, useContext, useState } from 'react';

const ChatContext = createContext<{
  isOpen: boolean;
  openChat: () => void;
  toggleChat: () => void;
}>({
  isOpen: false,
  openChat: () => {},
  toggleChat: () => {},
});

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const toggleChat = () => setIsOpen(prev => !prev);

  return (
    <ChatContext.Provider value={{ isOpen, openChat, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
