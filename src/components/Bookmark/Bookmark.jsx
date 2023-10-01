import 'bootstrap/dist/css/bootstrap.min.css'

const Bookmark = ({title}) => {
    return (
        <div className='bg-white my-3 p-3 rounded'>
            <h5>{title}</h5>
        </div>
    );
};

export default Bookmark;