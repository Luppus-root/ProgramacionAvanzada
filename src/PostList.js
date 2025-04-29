import { useState } from "react";
import Post from "./Post";

function PostList() {
    const [posts, setPosts] = useState([
        {"id": 1, "edad": 5, "nombre": "Juan"},
        {"id": 2, "edad": 7, "nombre": "María"},
        {"id": 3, "edad": 8, "nombre": "Ana"},
        {"id": 4, "edad": 9, "nombre": "Carlos"}
    ]);

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    const handleAdd = () => {
        const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
        const newPost = {
            id: newId,
            nombre: `Nuevo ${newId}`,
            edad: Math.floor(Math.random() * 10) + 1
        };
        setPosts([...posts, newPost]);
    }

    return (
        <div className="post-list">
            <button onClick={handleAdd} className="add-button">
                Agregar Nuevo Post
            </button>
            
            {posts.map(post => (
                <Post key={post.id} post={post} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default PostList;