class User < ActiveRecord::Base
  has_many :notes

  validates :email, uniqueness: true, format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/, message: "enter valid email, ex: janedoe@website.com" }
  validates :first_name, presence: true
  validates :last_name, presence: true

  # validate :password_requirements

  def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(new_password)
    @raw_password = new_password
    @password = BCrypt::Password.create(new_password)
    self.hashed_password = @password
  end

  def password_requirements
    @raw_password ||= ""
    if @raw_password || new_record?
      if @raw_password.length <= 5 || !(@raw_password =~ /[!@#$%^&*()]/) || !(@raw_password =~ /\d/)
        errors.add(:password, "must meet our password requirements. 6 characters long. Contains a special character. Has a digit.")
      end
    end
  end
end
