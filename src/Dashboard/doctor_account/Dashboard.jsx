import { useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";
import useGetProfile from "../../hooks/useFetchData";
import Tabs from "./Tabs";

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `{BASE_URL}/doctors/profile/me`
  );
  const [tab, setTab] = useState("overview");
  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      {loading && !error && <Loading />}
      {error && !loading && <Error />}
      {!loading && !error && (
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tabs tab={tab} setTab={setTab} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
