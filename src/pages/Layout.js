import React, { useContext } from "react";
import { HeaderUser } from "../components/Organism/HeaderUser/index";
import { HeaderSection } from "../components/Organism/HeaderSection/index";
import { Loader, Dimmer } from "semantic-ui-react";
import { ResultOperationModal } from "../components/Organism/ResultOperationModal/index";

import { AppContext } from "../providers/ContextProvider";

const Layout = ({ children }) => {
  const { state } = useContext(AppContext);

  const loaderSection = (
    <Dimmer active inverted>
      <Loader size="large" inline="centered">
        Loading
      </Loader>
    </Dimmer>
  );

  return (
    <div>
      <>
        {state.loading ? (
          loaderSection
        ) : (
          <>
            <HeaderUser userInfo={state.userInfo} />
            <HeaderSection />
            {children}
            <ResultOperationModal />
          </>
        )}
      </>
    </div>
  );
};

export default Layout;
