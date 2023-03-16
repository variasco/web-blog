import { getUserInited, userActions } from "entities/User";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
