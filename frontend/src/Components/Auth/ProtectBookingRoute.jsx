import {Navigate, Outlet} from 'react-router-dom'

const ProtectBookingRoute = () => {
    const isAutehnticated = !!localStorage.getItem('token')
    return isAutehnticated ? <Outlet /> : <Navigate to="/login" replace={true} />;          
}
export default ProtectBookingRoute
