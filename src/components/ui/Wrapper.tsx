import { PropsWithChildren } from "react";

interface WrapperProps {
  className?: string;
}

const Wrapper = ({ className, children }: PropsWithChildren<WrapperProps>) => {
  return (
    <div
      className={`flex items-center justify-center px-4 py-2 border rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
