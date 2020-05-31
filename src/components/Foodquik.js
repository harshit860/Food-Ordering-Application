import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainRes from './MainRes'
import InputBase from '@material-ui/core/InputBase';
import Topsell from './Topsell'
import Contact from './Contact'
import Orders from './Orders'
import Coupon from './Coupons'
import Sign from './Sign'
import Order from './Order'



class Foodquik extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: "",
            MobileNumber: "",
            Users: [],
            Options: ["All Restraunts", "Coupons"],
            Restraunt_select: "",
            index: 0,
            Order: [],
            Search_name: '',
            showsign:true,
            nameflag: false,
            Finalprice: 0,
            showcart: false,
            Search_val: '',
            Restraunts: [
                {
                    restraunt_name: "Burgerkings",
                    rating: 3,
                    cuisines: "Continental....",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    dish: ["bigburger 150", "superbigburger 200", "dailyburger 400"],
                    dishcost: [150, 200, 400]
                },
                {
                    restraunt_name: "Kerala Foods",
                    rating: 4.3,
                    cuisines: "South...",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1070053/pexels-photo-1070053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Idiyappam 230", "Puttu 250", "Appam 200"],
                    dishcost: [230, 250, 200]
                },
                {
                    restraunt_name: "Food Express",
                    rating: 3.9,
                    cuisines: "North,South..",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    dish: ["Sandwich 120", "meal 200", "Drink 200"],
                    dishcost: [120, 200, 200]
                },
                {
                    restraunt_name: "Pizza Boy",
                    rating: 4,
                    cuisines: "Italian....",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Farmhouse 400", "Onions 330"],
                    dishcost: [400, 330]
                }, {
                    restraunt_name: "Sandwich Zone",
                    rating: 3,
                    cuisines: "Continental....",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1633572/pexels-photo-1633572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Club 300", "Grilled 500"],
                    dishcost: [300, 500]
                },
                {
                    restraunt_name: "The Dhaba",
                    rating: 3,
                    cuisines: "North Indian",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Chole Bhature  400", "Lassi  300", "Kulcha  300", "Dal Makhni  340"],
                    dishcost: [400, 300, 300, 340]
                },
                {
                    restraunt_name: "Stellar",
                    rating: 4.2,
                    cuisines: "Continental..",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Non-Veg Platter 400", "Veg-platter 500"],
                    dishcost: [400, 500]
                }, {
                    restraunt_name: "HealthFoods",
                    rating: 4.6,
                    cuisines: "FitFood",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Green Salad 300", "All fruits 200"],
                    dishcost: [300, 200]
                }, {
                    restraunt_name: "Vada Pav 1",
                    rating: 4.7,
                    cuisines: "Continental....",
                    location: "Bangalore",
                    url: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/vada-pav-recipe-1a.jpg",
                    dish: ["Spicy Vada 50", "Cheese Vada 60"],
                    dishcost: [50, 60]
                }, {
                    restraunt_name: "Dragon Foods",
                    rating: 3,
                    cuisines: "Continental....",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    dish: ["Noodles 120", "momoz 200", "Manchow Soup 90"],
                    dishcost: [120, 200, 90]
                }, {
                    restraunt_name: "Ice cream",
                    rating: 3,
                    cuisines: "Continental....",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/70842/hot-pepper-pepper-fire-food-70842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    dish: ["Mixfruit 200", "Chocalate 160", "Strawberry  130"],
                    dishcost: [200, 160, 130]
                },
                {
                    restraunt_name: "The Pastry",
                    rating: 3,
                    cuisines: "Continental....",
                    location: "Bangalore",
                    url: "https://images.pexels.com/photos/273773/pexels-photo-273773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    dish: ["RedVelvet 60", "Vanilla 70"],
                    dishcost: [60, 70]
                },
            ]
        }
    }
    select_restraunt = (index) => {

        this.setState({
            Restraunt_select: this.state.Restraunts[index].restraunt_name,
            index: index
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            Users: [...this.state.Users, this.state.Username + " " + this.state.MobileNumber],
            nameflag: true,
            showsign: !this.state.showsign
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            nameflag: false
        })
    }

    handleclose() {
        this.setState({
            showcart: !this.state.showcart
        })
    }

    order_food = (index, restrauntcount) => {
        console.log(restrauntcount)
        console.log(index)
        console.log(this.state.Restraunts[restrauntcount].dish[index])

        this.setState({
            showcart: true,
            Order: [...this.state.Order, this.state.Restraunts[restrauntcount].restraunt_name + ' ' + this.state.Restraunts[restrauntcount].dish[index]],
            Finalprice: this.state.Finalprice + Number(this.state.Restraunts[restrauntcount].dishcost[index])
        })
        console.log(this.state.Order)

    }

    logout = () => {
        this.state.Users.pop()
        this.setState({
            nameflag: false

        })
    }
    render() {

        if (this.state.Search_name == this.state.Restraunts.restraunt_name) {
            console.log(this.state.Restraunts.restraunt_name)
        }
        let list = this.state.Options.map(a => {
            return <div className="col-xl-2">
                <button className="border border-white btn">{a}</button>
            </div>
        })
        return (
            <Router >
                <div className="col">
                    <div className="col-xl-12">
                        <AppBar className="bg-white shadow" >
                            <div className="row">
                                <div className="col-xl-3  text-left">
                                    <h1 className="text-left  mt-4 text-success display-4">Food-Quik-React</h1>
                                </div>
                                <div className="text-dark offset-2">
                                    {this.state.nameflag ? (
                                        <div>
                                            <h4> {"Welcome :" + this.state.Users[0]} <button onClick={() => this.logout()} className="btn border border-danger text-danger">logout</button></h4>
                                        </div>
                                    ) : ('')}
                                </div>
                            </div>
                        </AppBar>
                    </div>
                    <div style={{ marginTop: "120px" }} className="row ">
                        <div className="col-xl-2">
                            <Link to="/"><button className="border border-white btn  text-success"><h3>All Restraunts</h3></button></Link>
                        </div>
                        <div className="col-xl-2">
                            <Link to="/Top"><button className="border border-white btn  text-success"><h4>Top sellars</h4></button></Link>
                        </div>
                        {this.state.showsign ? (
                            <div className="col-xl-2">
                                <Link to="/Sign">    <button className="border border-white btn  text-success"><h4>SignUp</h4></button></Link>
                            </div>
                        ) : ('')}
                        <div className="col-xl-2">
                            <Link to="/Contact"><button className="border border-white btn  text-success"><h4>Contact Us</h4></button></Link>
                        </div>
                        <div className="col-xl-2">
                            <button className="border border-white btn  text-warning" onClick={() => this.handleclose()} ><h1>Food Cart</h1></button>
                        </div>
                    </div>
                    {/* Routes and components */}
                    <div className="col-xl-12" >
                        <Route path="/" exact render={() => <MainRes restrauntdetail={this.state.Restraunts} order={this.select_restraunt} />} />
                        <Route path="/order" exact render={() => <Order restraunt={this.state.Restraunts} count={this.state.index} dish={this.order_food} name={this.state.Restraunts[this.state.index].restraunt_name} />} />
                        <Route path="/Top" exact render={() => <Topsell />} />
                        <Route path="/coupon" exact render={() => <Coupon />} />
                        <Route path="/Sign" exact render={() => <Sign signme={this.handleSubmit} change={this.handleChange} name={this.state.Username} mobile={this.state.mobile} />} />
                        <Route path="/Contact" exact render={() => <Contact />} />
                        <Route path="/Orders" exact render={() => <Orders showcart={this.state.showcart} close={() => this.handleclose()} final={this.state.Finalprice} list_of_orders={this.state.Order} />} />
                        <Orders showcart={this.state.showcart} close={() => this.handleclose()} final={this.state.Finalprice} list_of_orders={this.state.Order} />
                    </div>
                </div>
            </Router>
        )
    }

}
export default Foodquik;