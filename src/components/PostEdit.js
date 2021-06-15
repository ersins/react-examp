import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {api} from "../api";
import PostForm from "./PostForm";

const PostEdit = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        api()
            .get(`/posts/${params.id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h3>Yazı ekleme Formu</h3>
            <PostForm post={post}/>
        </div>
    );
};
export default PostEdit;
