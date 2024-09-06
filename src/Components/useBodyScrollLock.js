import { useEffect, useState } from "react";

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  const toggle = () => setIsLocked(!isLocked);

  return [isLocked, toggle];
};

export default useBodyScrollLock;
