import './PostList.css';

// eslint-disable-next-line react/prop-types
function PostList({ posts, increaseLikes }) {
    return (
        <div className="post-list">
            {/* eslint-disable-next-line react/prop-types */}
            {posts.map((post, index) => (
                <div key={index} className="post-item">
                    <h4>{post.title}</h4>
                    <p>
                        {post.content}
                        <span onClick={() => increaseLikes(index)}>
                            &nbsp;👍
                        </span>
                        {post.likes}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default PostList;