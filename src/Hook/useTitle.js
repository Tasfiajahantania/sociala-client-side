import { useEffect } from "react";

function useTitle(title){
    useEffect(()=> {
        document.title = title + " - Sociala";
    },[title])
}

export default useTitle;