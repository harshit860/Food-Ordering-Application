import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';

const MainRes = (props) =>
{

        let display_all_res = props.restrauntdetail.map((elem,index) =>{
            return <Link className="col-xl-2 ml-5 mt-5 border btn btn-white rounded " to='/Order'>
                
                <Tooltip title={'CLick to order from '+ elem.restraunt_name} placement="top-start">
                <div onClick={()=>props.order(index)} className="">
               <div className="row"><h2 className="text-success text-left">{elem.restraunt_name}</h2><h4 className="offset-1 mt-1">{"R :"+elem.rating}</h4></div> 
                <h6 className="text-left text-secondary text-monospace mt-0">{elem.location}</h6 >
                <img className = "w-100 h-75 " src={elem.url}></img>
                <h6 className="text-secondary text-left mt-2">{"Cuisines :"+elem.cuisines}</h6>
                    
            </div>
            </Tooltip>
            </Link>
            
        })
    
    return(
        <div>
          
            <div className="row border ">
            
            {display_all_res}
            </div>
                    
        </div>
    )
}
export default MainRes;