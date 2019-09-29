import React from 'react'

const Order = (props) =>{
    console.log(props.restraunt)

    let display_dish = props.restraunt[props.count].dish.map((elem,index)=>
        {
            return <div className="col-xl-2 mt-2 ">
                <button onClick={()=>props.dish(index,props.count)}  className="btn btn-success">{elem}</button>
            </div>
        })
    return(
        <div>
           <h3>{props.name}</h3> 
            {display_dish}
        </div>
    )
}
export default Order;