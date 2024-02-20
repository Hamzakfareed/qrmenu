
import React from "react";
const RestaurantTableComponent = () => {

    return (
        <table className="table is-stripped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Bill No</th>
                    <th>Token No</th>
                    <th>Channel & Order ID</th>
                    <th>Order By</th>
                    <th>Duration</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* Add your row data here */}
                    <td>234234</td>
                    <td>123</td>
                    <td>Zomato</td>
                    <td>Hamza Fareed</td>
                    <td>30 min</td>
                    <td>50 AED</td>
                    <td><button className="button is-primary">View</button></td>
                    {/* Repeat for each column */}
                </tr>
                <tr>
                    {/* Add your row data here */}
                    <td>234234</td>
                    <td>123</td>
                    <td>Zomato</td>
                    <td>Hamza Fareed</td>
                    <td>30 min</td>
                    <td>50 AED</td>
                    <td><button className="button is-primary">View</button></td>
                    {/* Repeat for each column */}
                </tr>
                <tr>
                    {/* Add your row data here */}
                    <td>234234</td>
                    <td>123</td>
                    <td>Zomato</td>
                    <td>Hamza Fareed</td>
                    <td>30 min</td>
                    <td>50 AED</td>
                    <td><button className="button is-primary">View</button></td>
                    {/* Repeat for each column */}
                </tr>
                <tr>
                    {/* Add your row data here */}
                    <td>234234</td>
                    <td>123</td>
                    <td>Zomato</td>
                    <td>Hamza Fareed</td>
                    <td>30 min</td>
                    <td>50 AED</td>
                    <td><button className="button is-primary">View</button></td>
                    {/* Repeat for each column */}
                </tr>
                <tr>
                    {/* Add your row data here */}
                    <td>234234</td>
                    <td>123</td>
                    <td>Zomato</td>
                    <td>Hamza Fareed</td>
                    <td>30 min</td>
                    <td>50 AED</td>
                    <td><button className="button is-primary">View</button></td>
                    {/* Repeat for each column */}
                </tr>
                <tr>
                    {/* Add your row data here */}
                    <td>234234</td>
                    <td>123</td>
                    <td>Zomato</td>
                    <td>Hamza Fareed</td>
                    <td>30 min</td>
                    <td>50 AED</td>
                    <td><button className="button is-primary">View</button></td>
                    {/* Repeat for each column */}
                </tr>
                
            </tbody>
        </table>
    );
}

export default RestaurantTableComponent;