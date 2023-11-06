import React, { Component } from 'react'
import {FaTrashCan} from "react-icons/fa6";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <FaTrashCan className='deleteIcon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order