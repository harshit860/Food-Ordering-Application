import React from 'react'

const Orders = (props) =>{

    var total=0;
    var element =props.list_of_orders.length;
for(var a=0;a<element.length;a++)
{
    console.log(element[a])
    var elem = element[a].split(' ')
    for(var i=0;i<elem.length;i++)
    {
        total=total+elem[1];
    }
}
console.log(total)

    let list = props.list_of_orders.map((a,count=count+1)=>{
        return <div className="col-xl-2">
            <div className="row">
                <h3 className="mt-2">{count+1}</h3>
            <button className=" offset-1 mt-2 text-left text-success btn btn-white border border-success">{a}</button>
            </div>
        
        </div>
    })
    return(
        <div>
            
            <h3 className="text-left display-3 text-primary">Your Order</h3>
            {list}
            <div className="">
                    <h3 className="text-dark ">{"Total Price: "+props.final}</h3>
            </div>
            <div>
                <button className="btn btn-primary" onClick={()=>(alert("Order Placed"))}>Order</button>
            </div>
            
        </div>
    )
}
export default Orders