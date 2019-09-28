import React from 'react'

const Sign = (props) =>{
    console.log(props)
    return(
        <div>
            <div className="col-xl-4 border border-success rounded">
                    <form onSubmit={(e)=>props.signme(e)}>
                        <label className="mt-3 text-left">{"Enter Name  :"}</label>
                        <input type="text" className="ml-4" onChange={(e)=>props.change(e)} name="Username" value={props.name}></input><br></br>
                        <label className="text-left">{"Enter Mobile :"}</label>
                        <input type="text" className="ml-3 " onChange={(e)=>props.change(e)} name="MobileNumber" value={props.mobile}></input><br></br>
                        <input type="submit" value="Signup"  className="btn btn-white border border-success text-left align-baseline"></input>
                    </form>
            </div>
        </div>
    )
}
export default Sign