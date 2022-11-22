import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate=useNavigate();
    let dologout=()=>{
        localStorage.removeItem("react_app_token");
        localStorage.removeItem("profile");
        navigate("/");
      }
    return (
        <ul class="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    
                    <i class="fas fa-sack-dollar"></i>
                    
                </div>
                <div className="sidebar-brand-text mx-3">Money Manager</div>
            </a>


            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portal/incomelist">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Income list</span></Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link" to="/portal/expenselist">
                    <i className="fas fa-fw fa-chart-pie"></i>
                    <span>Expenses list </span></Link>
            </li>
            <hr className="sidebar-divider" />


<div className="sidebar-heading">
    Creation
</div>
            <li className="nav-item">
                <Link className="nav-link" to="/portal/addincome">
                    <i className="fas fa-fw fa-user-plus"></i>
                    <button className="btn btn-success">Add Income</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portal/addexpense">
                    <i className="fas fa-fw fa-user-minus"></i>
                    <button className="btn btn-warning">Add Expense</button></Link>
            </li>

            


            <hr className="sidebar-divider" />

            <li className="nav-item">
                
                <a className="nav-link mt-0">
                <i class="fas fa-sign-out-alt"></i>
                    <button className="btn btn-danger" onClick={dologout}>Logout</button>
                </a>
            </li>
            


            
            

        </ul>
    )
}