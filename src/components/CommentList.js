import React from "react";

const CommentList = (props) => {
    return (
        <React.Fragment>
            <h3>Yorumlar</h3>
            {props.postComments.map((postComment) => {
                return (
                    <div key={postComment.id} className="ui relaxed list">
                        <div className="item">
                            <div className="content">
                                <span className="header">{postComment.display_name}</span>
                                <div className="description">{postComment.body} </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default CommentList;
