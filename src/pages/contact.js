//import NavBar from "./nav";
/**CSS import */
import "../css/contact.css" 
import food1 from "../images/food1.jpg"
function Contact() {
    function SubmitEvent(e) {
        e.preventDefault();
        let customerName = e.target.form[0].value
        let customerPhone=e.target.form[1].value
        let email = e.target.form[2].value
        let dateTime=e.target.form[3].value
        let customerNumber=e.target.form[4].value
        console.log(customerName, customerPhone, email, dateTime, customerNumber)
        let form = document.getElementById("form")
        form.style.visibility = "hidden"
        let holder = document.createElement("div")
        let newDate=dateTime.replace("T"," at    ")
        holder.className="thankYouText"
        holder.textContent =
            `Thank you ${customerName}! Your table for ${customerNumber} people is booked on ${newDate}`
        let right = document.getElementById("right")
        holder.style.visibility="visible"
        right.append(holder)
        
    }

    return (
        <>
            <div className="container">
        <div className="left">
           {/**<NavBar/>*/}
            <h1>CONTACT US</h1>
            <h3>Opening Times</h3>
            <ul>
                <li>Mon – Fri: 8am – 8pm</li>
                <li>Sat – Sun: 9am – 7pm</li>
            </ul>
            <h4>Tel. +44 161 881 5777</h4>
            <h4>20 Hilton Street Northern Quarter, Manchester M1 1FR England</h4>
                </div>
        
                <div className="mid">
                    <img src={food1} alt="food"></img>
                </div>

        <div className="right" id="right">
            <form id="form">
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" value={this}></input>
                        <br />
                        <label htmlFor="tel">Phone Number</label>
                        <br />
                        <input type="tel" value={this}></input>
                        <br />
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" value={this}></input>
                        <br />
                        <label htmlFor="date">Book your date</label>
                        <br />
                        <input type="datetime-local" value={this}></input>
                        <br />
                        <label htmlFor="peope">Number of Customers</label>
                        <br />
                        <input type="number" value={this}></input>
                        <br />
                    <input type="submit" onClick={(e)=>{SubmitEvent(e)}}></input>
            </form>

                </div>
                </div>
        </>
    )

};
 export default Contact;