import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function DetailPage() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${apiUrl}/posts/${id}`)
            .then((resp) => {
                setPosts(resp.data)
            })
            .catch((err) => {
                console.error(404)
            })
    }, [id])

    return (
        <main>

            <div className="page-header container">
                <button className="btn-back" onClick={() => navigate("/posts")}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <h2>Dettagli Post numero {id}</h2>
            </div>

            <div className="detail-page">

                <h3>
                    {posts.title}
                </h3>

                <img className="" src={`${apiUrl}/${posts.image}`} alt="Immagine del Post" />

                <p>
                    {'"' + posts.content + '"'}
                </p>


                <div className="prev-next-container">
                    <Link className="btn-prev" to={`/posts/${posts.id - 1}`}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <Link className="btn-next " to={`/posts/${posts.id + 1}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>

            </div>

        </main>
    )
}

export default DetailPage;