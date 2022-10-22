[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)  [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/paygh61/)


# Hue-Like Light Card for Home Assistant

This card is providing light control. It is inspired by original Philips Hue app.

![Screen1](/doc/screen1.png)

\* *intensity of color, shadow and other UI properties may be subject of change*

### Basic configuration
```yaml
type: custom:hue-like-light-card
entity: light.livingroom_color
```
For more options see [Configuration](#configuration) or let yourself inspire in [Examples of configuration](#examples-of-configuration)

## Installation

### HACS

- Open HACS
- Go to "Frontend" section
- Click button with "+" icon
- Search for "Hue-Like Light Card"
- Install repository in HACS
- Refresh your browser

### Manual

- Download `hue-like-light-card.js` file from the [latest release](https://github.com/Gh61/lovelace-hue-like-light-card/releases/latest)
- Save downloaded file somewhere in `<ha config>/www/` directory, e.g. `/config/www/custom_lovelace/hue-like-light-card.js`
- Add saved file to [Lovelace resources](https://my.home-assistant.io/redirect/lovelace_resources/)
  ```yaml
  url: /local/custom_lovelace/hue-like-light-card.js
  type: module
  ```
- Restart HA if you had to create `www` directory
- Refresh your browser

## Configuration
<table>
  <tr>
    <th>Key</th>
    <th>Type</th>
    <th>Required</th>
    <th>Since</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>entity</code></td>
    <td>string</td>
    <td>yes*</td>
    <td>1.0.0</td>
    <td>-</td>
    <td>Light entity name (eg. <code>light.my_light</code>)</td>
  </tr>
  <tr>
    <td><code>entities</code></td>
    <td>list of strings</td>
    <td>yes*</td>
    <td>1.0.0</td>
    <td>-</td>
    <td>Multiple Light entity names</td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td>string</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><i>Lights name</i></td>
    <td>Card title</td>
  </tr>
  <tr>
    <td><code>icon</code></td>
    <td>string</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><i><a href="#automatic-icon">automatic icon</a></i></td>
    <td>Card icon</td>
  </tr>
  <tr>
    <td><code>offClickAction</code></td>
    <td><a href="#click-action">Click Action</a></td>
    <td>no</td>
    <td>1.1.0</td>
    <td><a href="#automatic-click-action"><code>default</code></a></td>
    <td>Action when tile is clicked and all <b>lights are off</b></td>
  </tr>
  <tr>
    <td><code>offClickData</code></td>
    <td><a href="#click-action-data">Click Action Data</a></td>
    <td>no</td>
    <td>1.1.0</td>
    <td>-</td>
    <td><a href="#click-action-data">Data</a> for <code>offClickAction</code></td>
  </tr>
  <tr>
    <td><code>onClickAction</code></td>
    <td><a href="#click-action">Click Action</a></td>
    <td>no</td>
    <td>1.1.0</td>
    <td><a href="#automatic-click-action"><code>default</code></a></td>
    <td>Action when tile is clicked and any of <b>lights is on</b></td>
  </tr>
  <tr>
    <td><code>onClickData</code></td>
    <td><a href="#click-action-data">Click Action Data</a></td>
    <td>no</td>
    <td>1.1.0</td>
    <td>-</td>
    <td><a href="#click-action-data">Data</a> for <code>onClickAction</code></td>
  </tr>
  <tr>
    <td><code>scenes</code></td>
    <td>list of <a href="#scenes-configuration">Scenes</a></td>
    <td>no</td>
    <td>1.1.0</td>
    <td><i><a href="#scenes-detection">automatic detection</a></i></td>
    <td>Scenes shown in <a>Hue dialog</a></td>
  </tr>
  <tr>
    <td><code>allowZero</code></td>
    <td>boolean</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><code>false</code></td>
    <td>If turned on, the slider can be moved to and from value 0.<br/>(turning off/on the the lights)</td>
  </tr>
  <tr>
    <td><code>defaultColor</code></td>
    <td>string</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><code>'warm'</code></td>
    <td>
      If selected light (or lights) don't has RGB mode,<br/>this value is color is used when the light is on.<br/>Possible format:
      <ul>
        <li>HEX: <code>'#fff'</code>, <code>'#ffffff'</code></li>
        <li>RGB: <code>'rgb(255,255,255)'</code></li>
        <li>WEB name: <code>'salmon'</code></li>
        <li>predefined: <code>'warm'</code> or <code>'cold'</code></td></li>
      </ul>
  </tr>
  <tr>
    <td><code>offColor</code></td>
    <td>string</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><code>'#666'</code></td>
    <td>
      The color of the pane, when all lights are off.<br/>Possible format:
      <ul>
        <li>HEX: <code>'#fff'</code>, <code>'#ffffff'</code></li>
        <li>RGB: <code>'rgb(255,255,255)'</code></li>
        <li>WEB name: <code>'DarkSeaGreen'</code></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>disableOffShadow</code></td>
    <td>boolean</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><code>false</code></td>
    <td>If turned on, the card will not have inner shadow, when all lights are off.</td>
  </tr>
  <tr>
    <td><code>hueBorders</code></td>
    <td>boolean</td>
    <td>no</td>
    <td>1.0.0</td>
    <td><code>true</code></td>
    <td>If turned off, the card will not have so much rounded edges. It will have default edge rounding instead.</td>
  </tr>
  <tr>
    <td><code>resources</code></td>
    <td><a href="resources-object">Resources object</a></td>
    <td>no</td>
    <td>1.1.0</td>
    <td>-</td>
    <td>Can change (localize) texts on this card</td>
  </tr>
  <tr>
    <td colspan="6">
      <i>* At least one of this two must be filled in</i>
    </td>
  </tr>
</table>

### Automatic Icon
- If the card has one light entity attached, the icon is taken from entity.
    - If the entity has no icon, `mdi:lightbulb` (![lightbulb](https://user-images.githubusercontent.com/10837736/171443813-5e0dc16c-de15-43a1-9e96-0917c038e0a9.svg)) is used.
- If the card has two lights `mdi:lightbulb-multiple` (![lightbulb-multiple](https://user-images.githubusercontent.com/10837736/171444016-4b571fcf-0e30-4eca-9baf-61a710c17c05.svg)) is used.
- If the card has three or more lights attached, `mdi:lightbulb-group` (![lightbulb-group](https://user-images.githubusercontent.com/10837736/171444069-639d41d5-1dc7-4bd7-8104-b77f52df86fb.svg)) is used.

## Click action
When the card is clicked, something can happen. This can be configured through configuration.
```yaml
type: custom:hue-like-light-card
...
offClickAction: turn-on
onClickAction: turn-off
```
*Simple example to toggle lights on click.*

### Possible actions
<table>
  <tr>
    <th>Key</th>
    <th><a href="#action-data">Possible data*</a></th>
    <th>Data required</th>
    <th>Since</th>
    <th>Action on click</th>
  </tr>
  <tr>
    <td><code>default</code></td>
    <td>yes</td>
    <td>no</td>
    <td>1.1.0</td>
    <td><a href="#automatic-click-action">automatic action</a></td>
  </tr>
  <tr>
    <td><code>none</code></td>
    <td>no</td>
    <td>no</td>
    <td>1.1.0</td>
    <td>nothing</td>
  </tr>
  <tr>
    <td><code>turn-on</code></td>
    <td>no</td>
    <td>no</td>
    <td>1.1.0</td>
    <td>turn on all lights</td>
  </tr>
  <tr>
    <td><code>turn-off</code></td>
    <td>no</td>
    <td>no</td>
    <td>1.1.0</td>
    <td>turn off all lights</td>
  </tr>
  <tr>
    <td><code>more-info</code></td>
    <td>yes (<code>entity</code>)</td>
    <td>no</td>
    <td>1.1.0</td>
    <td>show system more-info dialog</td>
  </tr>
  <tr>
    <td><code>scene</code></td>
    <td>yes (<code>scene</code>)</td>
    <td>yes</td>
    <td>1.1.0</td>
    <td>activate selected scene</td>
  </tr>
  <tr>
    <td><code>hue-screen</code></td>
    <td>no (is using general <code>scenes</code> config)</td>
    <td>no</td>
    <td>1.1.0</td>
    <td>show <a href="#hue-screen">Hue Screen</a></td>
  </tr>
</table>

### Action data
TODO:

### Automatic click action
TODO:

## Scenes configuration
TODO:
### Scenes detection
TODO:

## Hue Screen
TODO:

### Resources object
TODO:


## Examples of configuration
#### Multiple lights
![Screen2](/doc/screen2.png)
```yaml
type: custom:hue-like-light-card
title: TV colors
entities:
  - light.tvlight_color1
  - light.tvlight_color2
  - light.tvlight_color3
  - light.tvlight_color4
```

#### Custom title and icon
![Screen3](/doc/screen3.png)
```yaml
type: custom:hue-like-light-card
entity: light.livingroom_lamp
title: Reading light
icon: mdi:floor-lamp
```

#### Home Assistant-like
![Screen4](/doc/screen4.png)
```yaml
type: custom:hue-like-light-card
title: TV colors
entities:
  - light.tvlight_color1
  - light.tvlight_color2
  - light.tvlight_color3
  - light.tvlight_color4
offColor: white
disableOffShadow: true
hueBorders: false
```

#### Turnable with slider
![Screen5](/doc/screen5.png)
```yaml
type: custom:hue-like-light-card
title: Living room
entity: light.livingroom_light
allowZero: true
```

#### Non-RGB Light
![Screen6](/doc/screen6.png)
```yaml
type: custom:hue-like-light-card
title: Living room
entity: light.livingroom_light
defaultColor: 'rgb(230,230,255)'
```


## Coming soon features
- reactions on sliding event instead of on change (value will be changed in the moment of sliding, not after)
- faster reactions between multiple cards (instant change of value on other cards)
- click on the card (choosable action)
- subtext under the main text (how many lights are on, ...)
- ui editor?
