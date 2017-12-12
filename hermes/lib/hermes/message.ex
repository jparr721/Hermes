defmodule Hermes.Message do
  use Ecto.Schema
  import Ecto.Changeset
  alias Hermes.Message


  schema "messages" do
    field :text, :string
    field :room_id, :id

    timestamps()
  end

  @doc false
  def changeset(%Message{} = message, attrs) do
    message
    |> cast(attrs, [:text])
    |> validate_required([:text])
  end
end
