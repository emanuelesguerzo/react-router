const FormPrint = ({ newPostSubmit, inputChange, newPost, setNewPost, availableTags }) => {

    return (

        <form action="" className="container" onSubmit={newPostSubmit}>

            {/* Title Input */}
            <div className="input-container post-title">
                <label htmlFor="PostName">Titolo</label>
                <input
                    type="text"
                    placeholder="Titolo del Post"
                    id="PostName"
                    name="title"
                    value={newPost.title}
                    onChange={inputChange}
                />
            </div>

            {/* Image Input */}
            <div className=" input-container post-image">
                <label htmlFor="PostImage">URL Immagine</label>
                <input
                    type="text"
                    placeholder="URL Immagine del Post"
                    id="PostImage"
                    name="image"
                    value={newPost.image}
                    onChange={inputChange}
                />
            </div>

            {/* Content Input */}
            <div className="input-container post-content">
                <label htmlFor="PostContent">Contenuto</label>
                <textarea
                    rows="4"
                    type="text"
                    placeholder="Contenuto del Post..."
                    id="PostContent"
                    name="content"
                    value={newPost.content}
                    onChange={inputChange}
                ></textarea>
            </div>

            {/* Tags Checkboxes */}
            <div className="input-container post-tags">
                <label htmlFor="TagContainer">Tag</label>
                <div className="tag-container" id="TagContainer">
                    {availableTags.map((curTag) => (
                        <div key={curTag} className="inputTag-container">
                            <input
                                className=""
                                type="checkbox"
                                id={curTag}
                                name="tags"
                                value={curTag}
                                checked={newPost.tags.includes(curTag)}
                                onChange={(event) => {
                                    const { value, checked } = event.target;

                                    setNewPost((curPost) => ({
                                        ...curPost,
                                        tags: checked
                                            ? [...curPost.tags, value]
                                            : curPost.tags.filter((curTag) => curTag !== value),
                                    }));
                                }}
                            />
                            <div className={`tag ${curTag.toLowerCase()}`}>
                                {curTag}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn submit"
            >
                Crea Post
            </button>

        </form>
    )
}

export default FormPrint;