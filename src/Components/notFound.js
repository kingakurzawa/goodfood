import React from "react";
const NotFoundPage = () => {
  return (
    <>
      <div className="error">
        <div className="error__box">
          <h1 className="error__box-type">Error 404 </h1>
        </div>
        <h2 className="errorText">Ooops! Something went wrong. </h2>
      </div>
    </>
  );
};

export default NotFoundPage;
