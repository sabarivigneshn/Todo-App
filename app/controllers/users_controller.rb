class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def edit
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.avatar = params['user']['avatar']
    @user.name = params['user']['name']
    @user.email = params['user']['email']
    @user.mobile_number = params['user']['mobile_number']
    @user.dob = params['user']['dob']
    @user.password = params['user']['password']
    @user.password_confirmation = params['user']['password_confirmation']
    @user.admin = params['user']['admin']
    respond_to do |format|
      if @user.save
        format.html {redirect_to user_path(@user.id), notice: "User was successfully created."}
        format.json {render :show, status: :ok, location: @user}
      else
        format.html{render :edit}
        format.json{render json: @user.errors}
      end
    end
  end

  def update
    @user = User.find(params[:id])
    @user.avatar = params['user']['avatar']
    @user.name = params['user']['name']
    @user.email = params['user']['email']
    @user.mobile_number = params['user']['mobile_number']
    @user.dob = params['user']['dob']
    @user.password = params['user']['password']
    @user.password_confirmation = params['user']['password_confirmation']
    @user.admin = params['user']['admin']
    respond_to do |format|
      if @user.save
        format.html {redirect_to edit_user_path(@user.id), notice: "User was successfully updated."}
        format.json {render :edit, status: :ok, location: @user}
      else
        format.html{render :edit}
        format.json{render json: @user.errors}
      end
    end

  end

  def show
    @user = User.find(params[:id])
  end
end
