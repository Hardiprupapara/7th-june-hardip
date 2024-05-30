import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Layout/AuthContext";


const Header = ({ sidebarOpen, setSidebarOpen }) => {


    const navigate = useNavigate();
    const { logout } = useAuth();

    const handellogout = () => {
        logout();
        navigate('/Login');
    }

    return (
        <header className="header bg-white">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between navbar-pad">
                    <div className="d-flex align-items-center">
                        <button
                            className="bg-transparent border-0 d-g-none"
                            aria-controls="sidebar"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSidebarOpen(!sidebarOpen);
                            }}
                        >
                            <span className="d-none d-lg-block">
                                {sidebarOpen ? <>
                                    <i className="bi bi-list fs-3 toggle-btn"></i>
                                </> : <>
                                    <i class="bi bi-x-lg fs-3"></i>
                                </>}
                            </span>
                            <span className="d-block d-lg-none">
                                {sidebarOpen ? <>
                                    <i className="bi bi-list fs-3 "></i>
                                </> : <>
                                    <i className="bi bi-list fs-3 toggle-btn"></i>
                                </>}
                            </span>

                        </button>
                        <div className="search-form d-none d-lg-block">
                            <form action="#">
                                <div className="input-group">
                                    <input type="search" placeholder="Search..." className="form-control" />
                                    <button type="submit" className="btn btn-primary"><i className="bi bi-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex align-items-center cursor-pointer" onClick={handellogout}>
                        <i className="bi bi-box-arrow-right fs-3" ></i> 
                        <span className="ms-2">Logout</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
