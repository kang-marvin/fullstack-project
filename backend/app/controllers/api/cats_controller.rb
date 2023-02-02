class Api::CatsController < ApplicationController
  def index
    results = [
      {"id":"e9","url":"https://cdn2.thecatapi.com/images/e9.jpg","width":1280,"height":855},
      {"id":"4u8","url":"https://cdn2.thecatapi.com/images/4u8.jpg","width":450,"height":300},
      {"id":"6ej","url":"https://cdn2.thecatapi.com/images/6ej.jpg","width":2912,"height":2448},
      {"id":"atq","url":"https://cdn2.thecatapi.com/images/atq.jpg","width":612,"height":612},
      {"id":"cg5","url":"https://cdn2.thecatapi.com/images/cg5.jpg","width":761,"height":613},
      {"id":"dlq","url":"https://cdn2.thecatapi.com/images/dlq.png","width":1024,"height":1024},
      {"id":"e09","url":"https://cdn2.thecatapi.com/images/e09.jpg","width":700,"height":368},
      {"id":"eaq","url":"https://cdn2.thecatapi.com/images/eaq.jpg","width":400,"height":330},
      {"id":"MTg0MTA4OA","url":"https://cdn2.thecatapi.com/images/MTg0MTA4OA.jpg","width":540,"height":720},
      {"id":"jnqO9lwG2","url":"https://cdn2.thecatapi.com/images/jnqO9lwG2.jpg","width":845,"height":583}
    ]
    render json: { cats: results }, status: :ok
  end
end
