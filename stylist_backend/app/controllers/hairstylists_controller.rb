class HairstylistsController < ApplicationController
  before_action :set_hairstylist, only: [:show, :update, :destroy, :addService]

  # GET /hairstylists
  def index
    @hairstylists = Hairstylist.all

    render json: @hairstylists
  end

  # GET /hairstylists/1
  def show
    render json: @hairstylist
  end

  # POST /hairstylists
  def create
    @hairstylist = Hairstylist.new(hairstylist_params)

    if @hairstylist.save
      render json: @hairstylist, status: :created, location: @hairstylist
    else
      render json: @hairstylist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hairstylists/1
  def update
    if @hairstylist.update(hairstylist_params)
      render json: @hairstylist
    else
      render json: @hairstylist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hairstylists/1
  def destroy
    @hairstylist.destroy
  end
  
  def addService
    #may need this method. 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hairstylist
      @hairstylist = Hairstylist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hairstylist_params
      params.require(:hairstylist).permit(:name, :year_licensed)
    end
end
