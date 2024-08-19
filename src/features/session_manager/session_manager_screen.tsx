import { observer } from "mobx-react-lite";
import { SessionManagerStore } from "./session_manager_store";
import React from "react";

export const SessionManager = observer(
  ({ child }: { child: React.ReactNode }) => {
    const [store] = React.useState(() => new SessionManagerStore());

    React.useEffect(() => {
      store.init();
    }, []);
    return <>{store.isAuth ? child : <div>Loading...</div>}</>;
  }
);
