import { module, test } from 'qunit';
import { setupRenderingTest } from 'xyz-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration:component - xyz-table', function (hooks) {
  setupRenderingTest(hooks);

  const columns = [
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

  const model = [
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
  ];

  test('it renders properly', async function (assert) {
    assert.expect(1);

    this.setProperties({
      columns,
      model,
    });

    await render(
      hbs`<XyzTable @columns={{this.columns}} @rows={{this.model}} />`,
    );
    assert.strictEqual(
      this.element.querySelector('.xyz-table__table-header').textContent.trim(),
      'Name',
      'The component rendered and the first column is Name',
    );
  });

  // would have more tests to ensure component has all the correct elements and visual states, etc.
});
