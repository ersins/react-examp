import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {api} from "../api";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api()
            .get("/posts")
            .then((req) => {
                setPosts(req.data);
            });
    }, [posts]);

    return (
        <div className="ui relaxed divided list">
            <Link to="/postadd" className="ui primary button">
                Yazı Ekle
            </Link>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <Link to={`/post/${post.id}`} className="header">
                                {post.title}
                            </Link>
                            <div className="description">{post.created_at}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PostList;
