// import React, { Component }from "react";
// import { withRouter } from "react-router-dom";

// class ScrollToTop extends Component {
//   componentDidUpdate(prevProps) {
//     if (
//       this.props.location.pathname !== prevProps.location.pathname
//     ) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     return null;
//   }
// }

// export default withRouter(ScrollToTop);

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

