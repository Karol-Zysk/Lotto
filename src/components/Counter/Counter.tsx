import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Num } from "../Calculations/Calculations.style";

function Counter({ from, to }: any) {
  const nodeRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3.5,
      ease: "easeOut",
      onUpdate(value: number) {
        node.textContent = value.toFixed();
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <Num ref={nodeRef} />;
}
export default Counter;
