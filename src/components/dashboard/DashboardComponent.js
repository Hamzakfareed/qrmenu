
import { Navigate } from 'react-router-dom';

import SideBarComponent from '../sidebar/SideBarComponent';


const DashboardComponent = () => {
    return (
        <div className="box is-full">
            <div className='columns'>
                <div className='column is-one-fifth box'>
                    <SideBarComponent />
                </div>
                <div className='column'>
                    <Navigate to="/tables">Tables</Navigate>
                    <Navigate to="/tables"> Tables</Navigate>
                    <Navigate to="/modifiers" > Modifiers</Navigate>
                    <Navigate to="/categories"> Categories</Navigate>
                    <Navigate to="/products" > Products </Navigate>
                    <Navigate to="/restaurants"> Restaurants</Navigate>
                    <Navigate to="/profile" > Profile</Navigate>
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;