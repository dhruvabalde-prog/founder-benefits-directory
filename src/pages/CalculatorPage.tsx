import React from 'react';
import { CustomStackGenerator } from '../components/CustomStackGenerator';

interface CalculatorPageProps {
  onToggleBookmark: (id: string) => void;
  bookmarkedIds: string[];
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onToggleBookmark,
  bookmarkedIds
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <CustomStackGenerator
        onToggleBookmark={onToggleBookmark}
        bookmarkedIds={bookmarkedIds}
      />
    </div>
  );
};
