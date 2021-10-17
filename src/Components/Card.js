import React from "react";
import Styles from "./Card.module.css"

const Card = (props) => {
    return(
 <div className={Styles.box}>
  <img width="200px" src={props.image} />
  <p>name:{props.name}</p>
  <p>dob:{props.dob}</p>
  <p>status:{props.status}</p>
  <p>nickname:{props.nickname}</p>
 </div>

    )
}

export default Card;