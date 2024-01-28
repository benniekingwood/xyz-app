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
  download(data = []) {
    // only show device and path data for items that are "available";
    const downloadables = data.reduce((list, item) => {
      if (item.status === 'available') {
        const { device, path } = item;

        list.push({ device, path });
      }

      return list;
    }, []);

    alert(JSON.stringify(downloadables));
  }
}
