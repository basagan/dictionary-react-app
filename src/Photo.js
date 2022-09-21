import React from "react";

export default function Photo(props) {
  console.log(props.photo);
  if (props.photo) {
    return (
      <div className="Photo">
        <section>
          <div className="row">
            {props.photo.map(function (photo, index) {
              return (
                <div className="col-4">
                  <img
                    src={photo.src.landscape}
                    alt="keywordp-pic"
                    className="img-fluid p-4"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
