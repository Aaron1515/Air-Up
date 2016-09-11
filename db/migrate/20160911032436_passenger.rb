class Passenger < ActiveRecord::Migration[5.0]
  def change
    create_table :passengers do |t|
      t.string :name
      t.string :info

      t.timestamps
    end
  end
end
