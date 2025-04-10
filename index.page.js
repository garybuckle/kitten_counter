if (kitten.db.counter === undefined) kitten.db.counter = { count: 0 };

export default () => kitten.html`
  <page css>
  <h1>Counter</h1>
  <${Count} />
  <button name='update' connect data='{value: -1}' aria-label='decrement'>-</button>
  <button name='update' connect data='{value: 1}' aria-label='increment'>+</button>
`;

const Count = () => kitten.html`
  <div
	id='counter'
	aria-live='assertive'
	morph
	style='font-size: 3em; margin: 0.25em 0;'
  >
	${kitten.db.counter.count}
  </div>
`;

export function onUpdate(data) {
  kitten.db.counter.count += data.value;
  this.send(kitten.html`<${Count} />`);
}
