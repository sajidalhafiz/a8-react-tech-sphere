import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <nav className='py-3 d-flex flex-column flex-sm-row justify-content-between align-items-center'>
            <h2 className='fw-bold'>TECH <span style={{ "color": "#00A3FF" }}>SPHERE</span></h2>
            <ul className=' text-decoration-none align-items-center list-unstyled d-flex flex-column flex-sm-row gap-1 gap-sm-5 '>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <img className=' img-fluid ' src='/public/user.png' alt="" />
                </li>
            </ul>
        </nav>
    );
};

export default Header;