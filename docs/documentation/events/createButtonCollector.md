# createButtonCollector

## Message#createButtonCollector

```js
let m = await message.channel.send('Click!', button);

const filter = (button) => button.clicker.user.id === message.author.id;
const collector = m.createButtonCollector(filter, { time: 5000 }); //collector for 5 seconds

collector.on('collect', b => console.log(`Collected button with the id ${b.id}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`)); 
```
<br>

| Properties | Returns |
| ------------- |:-------------:|
| client | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |
| collected | [Collection](https://discord.js.org/#/docs/collection/master/class/Collection) |
| ended | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| filter | [CollectorFilter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| message | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |
| next | [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| options | [CollectorOptions](https://discord.js.org/#/docs/main/stable/typedef/CollectorOptions%C5%88) |
| total |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| users | [Collection](https://discord.js.org/#/docs/collection/master/class/Collection) |
