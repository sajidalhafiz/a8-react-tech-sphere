import 'bootstrap/dist/css/bootstrap.min.css'
import Article from '../Article/Article';
import { useEffect } from 'react';
import { useState } from 'react';

const Blogs = () => {
    
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setArticles(data))
    },[])

    return (
        <div>
            {
                articles.map(article => <Article
                    key={article.id}
                    article={article}
                ></Article>)
            }
        </div>
    );
};

export default Blogs;