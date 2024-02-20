
import DashboardComponent from './components/dashboard/DashboardComponent';
import HeaderComponent from './components/header/HeaderComponent';
import ModifiersComponent from './components/modifiers/ModifiersComponent';
import RestaurantTableComponent from './components/tables/RestaurantTableComponent';
import CategoriesComponent from './components/categories/CategoriesComponent';
import ProfileComponent from './components/profile/ProfileComponent';
import ProductsComponent from './components/products/ProductsComponent';
import RestaurantComponent from './components/restaurants/RestaurantComponent';

import LoginComponent from './components/login/LoginComponent';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <div>
            <HeaderComponent />

            <Routes>
                <Route path="/" element={<DashboardComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/dashboard" element={isLoggedIn ? <DashboardComponent /> : <LoginComponent />} />
                <Route path="/tables" element={isLoggedIn ? <RestaurantTableComponent /> : <LoginComponent />} />
                <Route path="/modifiers" element={isLoggedIn ? <ModifiersComponent /> : <LoginComponent />} />
                <Route path="/categories" element={isLoggedIn ? <CategoriesComponent /> : <LoginComponent />} />
                <Route path="/products" element={isLoggedIn ? <ProductsComponent /> : <LoginComponent />} />
                <Route path="/restaurants" element={isLoggedIn ? <RestaurantComponent /> : <LoginComponent />} />
                <Route path="/profile" element={isLoggedIn ? <ProfileComponent /> : <LoginComponent />} />
            </Routes>
        </div>
    );

}

export default App;
