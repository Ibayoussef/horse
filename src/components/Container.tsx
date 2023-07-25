import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">{children}</div>
  );
}

export default Container;
