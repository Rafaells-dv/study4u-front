import React from "react";
import { DeleteButtonContainer } from "./style";
import deleteIcon  from "../../assets/icons/delete.svg";

function DeleteButton({onClick}) {
    return (
        <DeleteButtonContainer onClick={onClick}>
            <img src={deleteIcon}/>
        </DeleteButtonContainer> 
    )
}

export default DeleteButton;