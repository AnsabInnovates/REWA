import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { toFav } from "../../utils/api";
import { checkFavourites, updateFavourites } from "../../utils/common";
const Heart = ({id}) => {


    const [heartcolor, setHeartColor] = useState("white")

    const{ validateLogin}= useAuthCheck()

    const {user} = useAuth0()

    const{
        userDetails : {favourites, token},
        setUserDetails,
    } = useContext(UserDetailContext);

    useEffect(()=>{
        setHeartColor(()=>checkFavourites(id,favourites))
    },[favourites])
    const {mutate} = useMutation ({
        mutationFn: () => toFav(id, user?.email,token),
        onSuccess: () => {
            setUserDetails((prev)=>({
                ...prev,
                favourites : updateFavourites(id, prev.favourites)
            }))
        }
    })

    const handleLike = () => {
        if (validateLogin()) {
            mutate()
            setHeartColor((prev) => prev === "#D2042D" ? "white" : "#D2042D")
        }
    }
    return (

        <AiFillHeart size={24} color={heartcolor} onClick={(e) => {
            e.stopPropagation()
            handleLike()
        }} />

    )
}
export default Heart;