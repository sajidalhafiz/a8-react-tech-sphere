import 'bootstrap/dist/css/bootstrap.min.css'

const Activities = (props) => {
    return (
        <div className='shadow-sm rounded my-4 p-3 w-100 text-bold text-start' style={{backgroundColor: "rgba(0, 163, 255, 0.1)"}}>
            <h2 className='p-3 border-bottom border-info text-info text-center'>Activities Log</h2>
            <h4 className='py-3 border-bottom border-info'>Spent time on reading: {props.readingTime}</h4>
            <h4 className='py-3 border-bottom border-info'>Bookmarked Blogs: {props.totalBookmarks}</h4>
        </div>
    );
};

export default Activities;