class HairservicesController < ApplicationController
  before_action :set_hairservice, only: [:show, :update, :destroy]

  # GET /hairservices
  def index
    @hairservices = Hairservice.all

    render json: @hairservices
  end

  # GET /hairservices/1
  def show
    render json: @hairservice
  end

  # POST /hairservices
  def create
    @hairservice = Hairservice.new(hairservice_params)

    if @hairservice.save
      render json: @hairservice, status: :created, location: @hairservice
    else
      render json: @hairservice.errors, status: :unprocessable_entity
    end
  end

  # def ordered 
  #   @hairservices = Hairservice.order(price: :asc) 
  #   render json: @hairservices
  # end

  # PATCH/PUT /hairservices/1
  def update
    if @hairservice.update(hairservice_params)
      render json: @hairservice
    else
      render json: @hairservice.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hairservices/1
  def destroy
    @hairservice.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hairservice
      @hairservice = Hairservice.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hairservice_params
      params.require(:hairservice).permit(:service_name, :price, :hairstylist_id)
    end
end


