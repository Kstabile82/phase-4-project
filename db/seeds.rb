# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

karina = Hiker.create(hikername: "Karina")
dolly = Hiker.create(hikername: "Dolly")
dexter = Hiker.create(hikername: "Dexter")
roxy = Hiker.create(hikername: "Roxy")

breakneck = Hike.create(name: "Breakneck Ridge", location: "NY", difficulty: "Difficult", distance: 6.5)
capitol = Hike.create(name: "Capitol Peak", location: "CO", difficulty: "Difficult", distance: 14)

breakneck.hikerhikes.create(hiker_id: karina.id, hike_id: breakneck.id)
breakneck.hikerhikes.create(hiker_id: dolly.id, hike_id: breakneck.id)
capitol.hikerhikes.create(hiker_id: dexter.id, hike_id: capitol.id)
capitol.hikerhikes.create(hiker_id: roxy.id, hike_id: capitol.id)
