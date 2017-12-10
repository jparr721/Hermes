defmodule Hermes.PageController do
  use Hermes.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
