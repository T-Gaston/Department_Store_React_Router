class Department < ApplicationRecord
  has_many :items, dependent: :destroy
  
  def self.getItemsHash
    departments = Department.all
    newArray = departments.map do |department|
      { name: department.name, department_id: department.id, items: department.items }
    end
    return newArray.to_json
  end
end