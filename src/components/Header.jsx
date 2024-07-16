import React from 'react'

const Header = () => {

    const navbardata = ['Admin Board', 'Tasklist', 'New task']
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <span className='fs-1 text-uppercase text-light'>logo</span>
                </div>
                <div className='col-md-6 '>
                    {/* text navbar  */}
                    {/* <ul className='d-inline'>
                        {navbardata.map(title => <li className='d-inline-block px-3 text-primary' key={title}>{title}</li>)}
                    </ul> */}

                    <nav className='navbar navbar-expand'>
                        <div className='container-fluid'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Header