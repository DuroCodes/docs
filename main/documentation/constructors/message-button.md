---
permalink: /documentation/contructors/messagebutton
---

# MessageButton

## Text Button

```js
let button = new MessageButton()
    .setLabel("I like")
    .setStyle("blurple")
    .setEmoji("🍕")
    .setID("like_button")
```

## Url Button

```js
let button = new MessageButton()
    .setLabel("Vote")
    .setStyle("url")
    .setURL("https://discord-buttons.js.org")
```
| Method       | Value           | Can use  |
| ------------- |:-------------:| -----:|
| .setLabel() | Set the button label | both buttons |
| .setStyle() | Set the button style | both buttons |
| .setEmoji() | Set the button emoji | both buttons |
| .setURL() | Set the button url   | url button |   
| .setID() | Set the button id | color button | 

### .setEmoji()

For this you must pass in an emoji. For example: 

<img src="https://i.imgur.com/HBa9tC6.png"></img>
<br>
.setEmoji('✅')

But how would you acquire an emoji? Here is how:

<img src="https://i.imgur.com/ZlHPIQl.png"></img>

> Angelo, I would like custom emojis from my server.
Look no further!
## Full Example

