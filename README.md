# Hermes v0.2.1
Extensible chat client 

## Installation
### Requirements
  * Elixir >= 1.4
  * Erlang >= 18
  * Phoenix __(So far only tested with >= v 1.3)__
  * Node.js >= 5.0.0
  * Postgres

### Compilation
  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `npm install`
  * Start with `mix phx.server`



Now you can visit [`localhost:4000`](http://localhost:4000) to see it in action.
To make this app work with individual sessions, add `?user=*name here*` to the URL.
