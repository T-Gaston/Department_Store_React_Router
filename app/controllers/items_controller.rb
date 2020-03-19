class ItemsController < ApplicationController

  def create
    menu = Menu.find(params[:menu_id])
    item = menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { erros: item.errors }
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end
end