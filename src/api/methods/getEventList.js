import Api from '..';
import ApiConstants from '../ApiConstants';

export default function getEventList(token) {
  // console.log("------",token);
  return Api(
    ApiConstants.EVENTLIST,null,
    'POST',
    {
      "Authorization":token
    },
    null
  );
}
