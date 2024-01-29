import Controller from '@ember/controller';
import { action } from '@ember/object';
import { A } from '@ember/array';

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
      cellType: 'xyz-table/cells/status-cell',
    },
  ];

  downloadables = A([]);

  @action
  download(data = []) {
    // only show device and path data for items that are "available";
    this.downloadables = data.reduce((list, item) => {
      if (item.status === 'available') {
        const { device, path } = item;

        list.push({ device, path });
      }

      return list;
    }, []);

    alert(JSON.stringify(this.downloadables));
  }
}
