import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body:'Velit mollit ....', author: 'Mario', id:1},
        {title:'Welcome party!', body: 'Velit mollit ....', author: 'Luigi', id:2},
        {title:'Web dev top tips', body: 'Velit mollit ....', author: 'Mario', id:3}
    ]);

    return (
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
}

export default Home;