import React from "react";
import { useEffect, useState } from "react";

/*
 * All of the reusable logic for useOnlineStatus is here,
 * while SaveButton and StatusBar have access to the useOnlineStatus() hook
 * which in this case will return a boolean
 */
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
