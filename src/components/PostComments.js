import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const PostComments = (props) => {
    return (
        <React.Fragment>
            <CommentList postComments={props.postComments}/>
            <CommentForm handlePostCommentSubmit={props.handlePostCommentSubmit}/>
        </React.Fragment>
    );
};

export default PostComments;
