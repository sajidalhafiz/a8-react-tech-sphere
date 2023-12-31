import 'bootstrap/dist/css/bootstrap.min.css'
import bookmark from '../../assets/icons/bookmark.png'

const Article = (props) => {

    const { cover_image, author_image, publish_date, read_time,  blog_title, author_name } = props.article

    const readingTime = props.handleTimeSpend;
    const bookmarks = props.handleBookmark;

    return (
        <div className='shadow-sm my-4 p-4 rounded text-start'>
            <img className='rounded img-fluid' src={cover_image} alt="" />
            <div className='my-4 d-sm-flex justify-content-between'>
                <div className='d-sm-flex gap-sm-4 '>
                    <img className='rounded-circle' style={{ "width": "60px", "height": "60px"}} src={author_image} alt="" />
                    <div>
                        <h3>{author_name}</h3>
                        <small>{publish_date}</small>
                    </div>
                </div>
                <p>{read_time} min read <button onClick={()=>bookmarks(props.article)}><img src={bookmark} alt="" /></button></p>
            </div>
            <h1 className='fs-4'>{blog_title}</h1>
            <button className='my-4' onClick={()=>readingTime(read_time)}>Mark as read</button>
        </div>
    );
};

export default Article;