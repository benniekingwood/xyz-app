import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  columns = [
    {
      name: `Name`,
      valuePath: `name`,
    },
    {
      name: `Device`,
      valuePath: `device`,
    },
    {
      name: `Path`,
      valuePath: `path`,
    },
    {
      name: `Status`,
      valuePath: `status`,
    },
  ];

  @action
  download() {
    alert('download clicked!');
  }
}
