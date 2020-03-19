# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

department1 = Department.create(name: 'Shoes')
department1.items.create(name: 'Sandals')
department1.items.create(name: 'Boots')
department1.items.create(name: 'Tennis Shoes')

department2 = Department.create(name: 'Womens')
department2.items.create(name: 'Dresses')
department2.items.create(name: 'Pajamas')
department2.items.create(name: 'Bathing Suits')

department3 = Department.create(name: 'Mens')
department3.items.create(name: 'Casual Wear')
department3.items.create(name: 'Work Wear')
department3.items.create(name: 'Athletic Wear')

department4 = Department.create(name: 'Kids')
department4.items.create(name: 'Clothes')
department4.items.create(name: 'Shoes')
department4.items.create(name: 'Pajamas')

department5 = Department.create(name: 'Jewelery')
department5.items.create(name: 'Necklaces')
department5.items.create(name: 'Earrings')
department5.items.create(name: 'Watches')

puts "data seeded"