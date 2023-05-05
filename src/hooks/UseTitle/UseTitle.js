const { useEffect } = require("react")

const UseTitle = (title)=>{
    useEffect(()=>{
        document.title = `${title}-The Dragon news`;
    },[title])
}
export default UseTitle;