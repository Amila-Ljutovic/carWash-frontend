import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;
    const query = new URLSearchParams(location.search);

    const addQuery = (key, value) => {
        query.set(key, value);
        navigate({
          pathname: pathname,
          search: query.toString(),
        });
    };

    const removeQuery = (key) => {
        query.delete(key);
        navigate({
            pathname: pathname,
            search: query.toString(),
          });
    }; 

    const getQuery = (val) => {
        const x = query.get(val);
        const queryValue = x != null ? x : '';
        return queryValue;
    };

    return [addQuery, removeQuery, getQuery];
};

export default useQuery;