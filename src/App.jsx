import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, delPost, putPost } from "./redux/postSlice";

const initialState = {
  id: "",
  img: "",
  title: "",
  description: "",
};
function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [isEdit, setIsEdit] = useState(false);

  const [formulario, setFormulario] = useState(initialState);

  const HandleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !isEdit ? dispatch(addPost(formulario)) : dispatch(putPost(formulario));

    cleanForm();
    setIsEdit(false);
  };

  const clickUpdate = (post) => {
    setIsEdit(true);
    setFormulario(post);
  };

  const cleanForm = () => {
    setFormulario(initialState);
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formulario.title}
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Url Img</label>
                  <input
                    type="text"
                    name="img"
                    value={formulario.img}
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={formulario.description}
                    onChange={(e) => HandleChange(e)}
                  />
                </div>
                <button className="btn btn-success">
                  {isEdit ? "Actualizar" : "Guardar"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="row col-8">
          {posts.map((post, i) => (
            <div className="col-6" key={i}>
              <div className="card text-center mb-3">
                <img src={post.img} className="card-img-top" alt="No Image" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => dispatch(delPost(post.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => clickUpdate(post)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
