import 'bootstrap/dist/css/bootstrap.min.css'
import Article from '../Article/Article';
import { useState, useEffect } from 'react';

const Blogs = (props) => {
    
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setArticles(data))
    },[])

    const handleTimeSpend = props.handleTimeSpend;

    return (
        <div>
            {
                articles.map(article => <Article
                    key={article.id}
                    article={article}
                    handleTimeSpend={handleTimeSpend}
                ></Article>)
            }
        </div>
    );
};

export default Blogs;