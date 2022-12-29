import { useEffect } from "react";

function useTitle(title){
    useEffect(()=> {
        document.title = title + " - MD Photography Services";
    },[title])
}

export default useTitle;