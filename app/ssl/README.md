# <p align="center">Videolify</p>

<p align="center">Free WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms.</p>

<hr />

<p align="center">
    <a href="https://videolify.up.railway.app">videolify.up.railway.app</a>
</p>

<hr />

<details>
<summary>Features</summary>

<br/>

- Is `100% Free` - `Open Source` - `Self Hosted` and [PWA](https://en.wikipedia.org/wiki/Progressive_web_application)!
- No download, plug-in, or login required, entirely browser-based
- Unlimited number of conference rooms without call time limitation
- Translated in 133 languages
- Possibility to Password protect the Room for the meeting
- Desktop and Mobile compatible
- Optimized Room URL Sharing (share it to your participants, wait for them to join)
- Webcam Streaming (Front - Rear for mobile)
- Audio Streaming crystal clear with detect speaking and volume indicator
- Screen Sharing to present documents, slides, and more...
- File Sharing (with drag-and-drop), share any files to your participants in the room
- Select Audio Input - Output && Video source
- Ability to set video quality up to 4K and 60 FPS
- Recording your Screen, Audio and Video
- Snapshot the video frame and save it as image png
- Chat with Emoji Picker & Private messages & Save the conversations
- Speech recognition to send the speeches
- Advance collaborative whiteboard for the teachers
- Share any YT Embed video, video mp4, webm, ogg and audio mp3 in real-time
- Full-Screen Mode on mouse click on the Video element
- Possibility to Change UI Themes
- Right-click on the Video elements for more options
- Direct `peer-to-peer` connection ensures the lowest latency thanks to `WebRTC`
- Supports [REST API](app/api/README.md) (Application Programming Interface)
- [Slack](https://api.slack.com/apps/) API integration
- [Sentry](https://sentry.io/) error reporting

</details>

<details>
<summary>Start video conference</summary>

<br/>

- `Open` https://videolify.up.railway.app/newcall
- `Pick` your Room name and Join
- `Allow` using the camera and microphone
- `Share` the Room URL and Wait for someone to join for the video conference

</details>

<details>
<summary>Direct Join</summary>

<br/>

- You can `join` directly to a `room` by going to:
- https://videolify.up.railway.app/join?room=test&name=videolify&audio=0&video=0&screen=0&notify=0

  | Params | Type    | Description     |
  | ------ | ------- | --------------- |
  | room   | string  | room Id         |
  | name   | string  | user name       |
  | audio  | boolean | audio stream    |
  | video  | boolean | video stream    |
  | screen | boolean | screen stream   |
  | notify | boolean | welcome message |

</details>

<details>
<summary>Embed meetings</summary>

<br/>

Embedding a meeting into a service or app using an iframe.

```html
<iframe
  allow="camera; microphone; fullscreen; display-capture; autoplay"
  src="https://videolify.up.railway.app/newcall"
  style="height: 100%; width: 100%; border: 0px;"
></iframe>
```

</details>

<details open>
<summary>Quick start</summary>

<br/>

- You will need to have `Node.js` installed, this project has been tested with Node versions [12.X](https://nodejs.org/en/blog/release/v12.22.1/), [14.X](https://nodejs.org/en/blog/release/v14.17.5/) and [16.X](https://nodejs.org/en/blog/release/v16.15.0/).

```bash
# clone this repo
$ git clone https://github.com/Jaideep25/Videolify.git
# go to videolify dir
$ cd videolify
# copy .env.template to .env (edit it according to your needs)
$ cp .env.template .env
# install dependencies
$ npm install
# start the server
$ npm start
```

- Open http://localhost:3000 in browser

</details>

<details open>
<summary>Docker</summary>

<br/>

- Install docker engine: https://docs.docker.com/engine/install/
- Install docker compose: https://docs.docker.com/compose/install/

```bash
# copy .env.template to .env (edit it according to your needs)
$ cp .env.template .env
# build or rebuild services
$ docker-compose build
# create and start containers
$ docker-compose up # -d
# stop and remove resources
$ docker-compose down
```

- Open http://localhost:3000 in browser

</details>

<details>
<summary>Ngrok - Https</summary>

<br/>

You can start videoconferencing directly from your Local PC, and be reachable from any device outside your network, simply by following [these documentation](docs/ngrok.md), or expose it directly on [HTTPS](app/ssl/README.md)

</details>

<details>
<summary>Stun & Turn</summary>

<br/>

You can [Check here](https://videolify.up.railway.app/test), if you are full covered by the Videolify default IceServers ([Stun](https://en.wikipedia.org/wiki/STUN) & [Turn](https://en.wikipedia.org/wiki/TURN)).

If not, you can change it in the `.env` file and test it by the URL eg:

```html
https://videolify.up.railway.app/test?iceServers=[{"urls":"stun:stun.l.google.com:19302"},{"urls":"turn:openrelay.metered.ca:443","username":"openrelayproject","credential":"openrelayproject"}]
```

</details>

<details>
<summary>Rest API</summary>

<br/>

```bash
# The response will give you a entrypoint / Room URL for your meeting, where authorization: API_KEY_SECRET.
$ curl -X POST "http://localhost:3000/api/v1/meeting" -H "authorization: videolify_default_secret" -H "Content-Type: application/json"
$ curl -X POST "https://videolify.up.railway.app/api/v1/meeting" -H "authorization: videolify_default_secret" -H "Content-Type: application/json"
```

## API Documentation

The API documentation uses [swagger](https://swagger.io/) at http://localhost:3000/api/v1/docs. Or check it out on [live](https://videolify.up.railway.app/api/v1/docs)

</details>

<details>
<summary>Live Demos</summary>

<br/>

https://videolify.up.railway.app/

<br>

<a target="_blank" href="https://railway.app/new/template/videolify?referralCode=j25"><img src="https://railway.app/button.svg" style="width: 220px;"></a>

https://videolify.up.railway.app

<br>

</details>

<details>
<summary>Self Hosting</summary>

<br/>

Follow [this documentation](docs/self-hosting.md).

</details>

<details>
<summary>Credits</summary>

<br/>

- Miroslav Pejic

</details>

<details>
<summary>Contributing</summary>

<br/>

- Contributions are welcome and greatly appreciated!
- Just run before `npm run lint`

</details>

<details>
<summary>License</summary>

<br/>

[![AGPLv3](/public/images/AGPLv3.png)](LICENSE)

Videolify is free and can be modified and forked. But the conditions of the AGPLv3 (GNU Affero General Public License v3.0) need to be respected. In particular modifications need to be free as well and made available to the public. Get a quick overview of the license at [Choose an open source license](https://choosealicense.com/licenses/agpl-3.0/).

</details>
