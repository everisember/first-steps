import Route from "@ember/routing/route";
import constants from '../constants';

export default Route.extend({
  model(){
    return constants.TENISTAS;
  }
});
