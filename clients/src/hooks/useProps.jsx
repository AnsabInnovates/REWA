import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProps = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );
  

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProps;