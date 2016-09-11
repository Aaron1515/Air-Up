class WelcomeController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => :create
  def index
  end

  def create
    render "welcome/show"
  end

  def show
  end

end
