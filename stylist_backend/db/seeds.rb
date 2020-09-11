# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Hairstylist.create(name: "Samantha", year_licensed: 2013)

Hairservice.create(service_name: "haircut", price: 45, hairstylist_id: 1)
Hairservice.create(service_name: "blow-out", price: 25, hairstylist_id: 1)
Hairservice.create(service_name: "full highlight", price: 90, hairstylist_id: 1)
Hairservice.create(service_name: "partial highlight", price: 65, hairstylist_id: 1)
