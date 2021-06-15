import axios from "axios";
import React, {useEffect, useState} from "react";
import {api} from "../api";
import {Link, useParams} from "react-router-dom";
import DeleteModal from "./DeleteModal";
import PostComments from "./PostComments";

const PostDetail = (props) => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [postComments, setPostComments] = useState([]);

    const handlePostCommentSubmit = (event, postCommentBody) => {
        event.preventDefault();
        api()
            .post(`/posts/${params.id}/comments`, postCommentBody)
            .then((response) => {
                setPostComments([...postComments, response.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(
        (getPost) => {
            axios
                .all([
                    api().get(`/posts/${params.id}`),
                    api().get(`/posts/${params.id}/comments`),
                ])
                .then((response) => {
                    setPost(response[0].data);
                    setPostComments(response[1].data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        [params]
    );

    return (
        <React.Fragment>
            <h2 className="ui header">{post.title}</h2>
            <p>{post.created_at}</p>
            <div className="ui buttons">
                <Link to={`/post/${post.id}/edit`} className="ui blue button">
                    Edit
                </Link>
                <DeleteModal post={post} push={props.history.push}/>
            </div>
            <p>{post.content}</p>
            <PostComments
                postComments={postComments}
                handlePostCommentSubmit={handlePostCommentSubmit}
            />
        </React.Fragment>
    );
};

export default PostDetail;
