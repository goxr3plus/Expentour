//Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from "react";
import ReactDOM from "react-dom";

///
const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

///
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <h1> This is Private data don't share</h1>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

///
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <>
          <h1> The user is authenticated </h1>
          <WrappedComponent {...props} />
        </>
      ) : (
        <h1> Please login to see the info</h1>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  //   <Info info="There are the details" />,
  //   <AdminInfo isAdmin={true} info="U NA NA NA NA" />,
  <AuthInfo isAdmin={true} isAuthenticated={true} info="U NA NA NA NA" />,
  document.getElementById("app")
);
