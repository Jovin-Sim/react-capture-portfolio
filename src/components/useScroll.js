import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const animator = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    animator.start("show");
  } else {
    animator.start("hidden");
  }
  return [element, animator];
};
