import { useEffect } from "react";
import { useState } from "react";

function useInfiniteScroll (callback) {

  const [isFetch, isSetFetch ] = useState(false);


  useEffect(() => {

    window.addEventListener("scroll", isScrolling)

    return  () => { window.removeEventListener("scroll", isScrolling)}

  }, []);

  useEffect(() => {
    if (!isFetch) return;
    callback();
  },[isFetch]);


  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetch
    )
      return;
    isSetFetch(true);
  }


  return [isFetch,isSetFetch];




}
export default useInfiniteScroll;