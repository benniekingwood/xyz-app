import { module, test } from 'qunit';
import { setupTest } from 'xyz-app/tests/helpers';

module('Unit:controller - index', function (hooks) {
  setupTest(hooks);

  test('Action: download', function (assert) {
    assert.expect(1);

    // get the controller instance
    const controller = this.owner.lookup('controller:index');

    const data = [
      {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
      },
      {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
      },
      {
        name: 'uxtheme.dll',
        device: 'Lanniester',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
        status: 'available',
      },
      {
        name: 'cryptbase.dll',
        device: 'Martell',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
        status: 'scheduled',
      },
      {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
      },
    ];

    controller.send('download', data);

    assert.strictEqual(
      controller.downloadables.length,
      2,
      'Only the two available devices should be downloadable',
    );
  });
});
