import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface TabsProps {
  children: ReactNode;
  initialActiveTabId: string;
}

export interface TabListProps {
  children: ReactNode;
}

export interface TabProps {
  id: string;
  children: ReactNode;
}

export interface TabPanelProps {
  whenActive: string;
  children: ReactNode;
}

export interface TabsContextType {
  activeTabID: string;
  setActiveTabID: Dispatch<SetStateAction<string>>;
}
