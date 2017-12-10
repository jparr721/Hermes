/**
* This is temporary, and for testing purposes.
*/

// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import { Socket, Presence } from "phoenix"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

let user = document.getElementById("User").innerText;
let socket = new Socket("/socket", { params: { user: user }})
socket.connect();

// Presence
let presences = {};

let formatTimestamp = (timestamp) => {
	let date = new Date(timestamp);
	return date.toLocaleTimeString();
}

let listBy = (user, { metas: metas }) => {
	return {
		user: user,
		onlineAt: formatTimestamd(metas[0].online_at),
	}
}

let userList = document.getElementById("UserList");
let render = (presences) => {
	userList.innerHTML = Presence.list(presences, listBy)
		.map(presence => `
			<li>
				${presence.user}
				<br>
				<small>online since ${presence.onlineAt}</small>
			</li>
		`)
		.join("");
}

// Channel
let room = socket.channel("room:lobby");
room.on("presence_state", state => {
	presences = Presence.syncState(presences, state);
	render(presences)
});

room.on("presence_diff", diff => {
	presences = Presence.syncDiff(presences, diff);
	render(presences);
});

room.join();