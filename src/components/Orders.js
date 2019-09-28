import React from 'react'

const Orders = (props) =>{
    let list = props.list_of_orders.map((a,count=count+1)=>{
        return <div className="col-xl-2">
            <div className="row">
                <h3 className="mt-2">{count}</h3>
            <button className=" offset-1 mt-2 text-left text-success btn btn-white border border-success">{a}</button>
            </div>
            
        </div>
    })
    return(
        <div>
            
            <h3 className="text-left display-3 text-primary">Your Order</h3>
            {list}
        </div>
    )
}
export default Orders