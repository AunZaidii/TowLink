import { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
}

export function MobileContainer({ children, className = "" }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className={`w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden relative ${className}`} style={{ height: "844px" }}>
        {children}
      </div>
    </div>
  );
}