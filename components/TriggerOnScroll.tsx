import React, { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Iprops {
  className?: string;
  children?: ReactNode;
}

const TriggerOnScroll: FC<Iprops> = ({ className, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });

  return (
    <div className={className ? className : "trigger"} ref={ref}>
      {inView && children}
    </div>
  );
};

export default TriggerOnScroll;
