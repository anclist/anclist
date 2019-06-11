class Contact < ApplicationRecord
  validates :first_name, :last_name, :email, :message, presence: true
  validates :email, uniqueness: { case_sensitive: false }, on: :create
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
end
