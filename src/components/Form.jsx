import React from "react";

export const Form = () => {
  return <div><div className="col-4">
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
        </div></div>;
};
