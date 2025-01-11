import { useState } from "react"
export default function LikeButton(){

    let [isLiked, setisLiked] = useState(false)

    function ToggleLike(){
        setisLiked(!isLiked);
        console.log(isLiked);
    }

    return( 
        <p onClick={ToggleLike}>
            {
                isLiked ? (<i className="fa-regular fa-heart"></i>) : (<i class="fa-solid fa-heart"></i>)
            }
            
        </p>
    )
}