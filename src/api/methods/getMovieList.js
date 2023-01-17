import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function getMovieList(token) {
  console.log("------",token);
  return Api(
    ApiConstants.MOVIELIST,null,
    {
      "Authorization":token
    },
    'GET',
    null
  );
}
