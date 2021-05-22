import React from "react";
import PropTypes from "prop-types";

const Comentarios = props => {
	return (
		<>
          <ul className="comments">
              
          <li>
            <div className="user-comment-thumb">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt
                className="img-circle"
                width={30}
              />
            </div>
            <div className="user-comment-content">
              <a href="#" className="user-comment-name">
                John doe
                <p />
              </a>
              Tolerably earnestly middleton extremely distrusts she boy now
              not. Add and offered prepare how cordial two promise. Add and
              offered prepare how cordial two promise.
              <div className="user-comment-meta">
                <a href="#" className="comment-date">
                  January 4 at 1:11am
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="user-comment-thumb">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt
                className="img-circle"
                width={30}
              />
            </div>
            <div className="user-comment-content">
              <a href="#" className="user-comment-name">
                John doe
                <p />
              </a>
              Extremity direction existence as dashwoods do up. Securing
              marianne led welcomed offended but offering six raptures.
              Conveying concluded newspaper rapturous oh at.
              <div className="user-comment-meta">
                <a href="#" className="comment-date">
                  January 3 at 6:42pm
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="user-comment-thumb">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                alt
                className="img-circle"
                width={30}
              />
            </div>
            <div className="user-comment-content">
              <a href="#" className="user-comment-name">
                John doe <p />
              </a>
              Mean if he they been no hold mr. Is at much do made took held
              help. Latter person am secure of estate genius at.
              <div className="user-comment-meta">
                <a href="#" className="comment-date">
                  January 2 at 3:25pm
                </a>
              </div>
            </div>
          </li>
          <li className="comment-form">
            <div className="user-comment-thumb">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt
                className="img-circle"
                width={30}
              />
            </div>
            <div className="user-comment-content">
              <textarea
                className="form-control autogrow"
                placeholder="Escribe un comentario..."
                style={{
                  overflow: "hidden",
                  wordWrap: "break-word",
                  resize: "horizontal",
                  height: 46,
                }}
                defaultValue={""}
              />
              <button className="btn">
                <i className="entypo-chat" />
              </button>
            </div>
          </li>
        </ul>
		</>
	);
};

Comentarios.propTypes = {
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	imagen: PropTypes.string
};

export default Comentarios;

