import React from 'react'
import Drawer from '@material-ui/core/Drawer';
// import {useState} from 'react'
const Orders = (props) => {

    console.log(props)

    var total = 0;
    var element = props.list_of_orders.length;
    for (var a = 0; a < element.length; a++) {
        console.log(element[a])
        var elem = element[a].split(' ')
        for (var i = 0; i < elem.length; i++) {
            total = total + elem[1];
        }
    }


    let list = props.list_of_orders.map((a, count = count + 1) => {
        return <div className="col-xl-12 mt-1">
            <div className="row">
                <h3 className="mt-2">{count + 1}:</h3>
                <button className=" ml-2  text-left text-success btn btn-white border border-success">{a}</button>
            </div>

        </div>
    })

    return (
        <Drawer anchor="bottom" open={props.showcart} onClose={props.close}>
        <div className="col-xl-12 row p-4">

            <h3 className="text-center display-3 text-primary col-xl-10">Your Order</h3>
            {list}
            <div className="col-xl-10 mt-2">
                <h3 className="text-dark ">{"Total Price: " + props.final}</h3>
            </div>
            <div className="col-xl-10">
                <button className="btn btn-primary mt-3" onClick={() => (alert("Order Placed"))}>Order Confirm</button>
            </div>
            

        </div>
        </Drawer>
    )
}
export default Orders