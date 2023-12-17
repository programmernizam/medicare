import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/appointment/my-appointment`);
  return (
    <div>
      {/* Loading State */}
      {loading && !error && <Loading />}
      {/* Error */}
      {error && !loading && <Error errorMessage={error} />}
      {/* Data Loaded */}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5"></div>
      )}
    </div>
  );
};

export default MyBookings;
