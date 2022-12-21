import React from "react";
type GuestProps = {
  title: string
};
const Guest: React.SFC<GuestProps> = ({ children, title = "Sign In" }) => {
  return (
    <main className="main-content  mt-0">
      <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")' }}>
        <span className="mask bg-gradient-dark opacity-6" />
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">{title}</h4>
                  </div>
                </div>
                <div className="card-body">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Guest;
