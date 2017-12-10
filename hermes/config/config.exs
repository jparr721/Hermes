# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :hermes,
  ecto_repos: [Hermes.Repo]

# Configures the endpoint
config :hermes, Hermes.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "M46GfHsv94dej6LiK3c5CgxO8JL0xdcUaHqDb+Aiyj2fYWlDli17/ASxb2ArPbqc",
  render_errors: [view: Hermes.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Hermes.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
