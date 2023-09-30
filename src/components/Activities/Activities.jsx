import 'bootstrap/dist/css/bootstrap.min.css'
import Bookmark from '../Bookmark/Bookmark';

const Activities = () => {
    return (
        <div className='shadow-sm rounded my-4 p-3 text-bold text-start' style={{backgroundColor: "rgba(0, 163, 255, 0.1)"}}>
            <h2 className='p-3 border-bottom border-info text-info text-center'>Activities Log</h2>
            <h4 className='py-3 border-bottom border-info'>Spent time on read: 123</h4>
            <h4 className='py-3 border-bottom border-info'>Bookmarked Blogs: 4</h4>
            <Bookmark></Bookmark>
            <Bookmark></Bookmark>
            <Bookmark></Bookmark>
            <Bookmark></Bookmark>
        </div>
    );
};

export default Activities;