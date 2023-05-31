import { useEffect, useState } from "react";

export function useSplash(){
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return showSplash;
}