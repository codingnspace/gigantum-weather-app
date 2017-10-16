import {testUrl} from 'js/config';

let fetchApiData = () => {
  let invocation = new XMLHttpRequest();
  invocation.open('GET', testUrl, true);
  invocation.send();

  return invocation;
}
/**
* @param {string} appId - API Id or to get info about
*/
export let getApiData = () => {

    let invocation = fetchApiData()

    return invocation;
}
