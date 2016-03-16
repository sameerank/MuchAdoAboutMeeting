# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
  {
    email: "ghost@kingdom.dk",
    name: "King Hamlet",
    password: "booooo",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "Ghost of Hamlet's Father",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "hamlet@kingdom.dk",
    name: "Hamlet",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "son of the former king and nephew to the present king",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "claudius@kingdom.dk",
    name: "Claudius",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "King of Denmark",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "bernardo@kingdom.dk",
    name: "Bernardo",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "sentinel",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "cornelius@kingdom.dk",
    name: "Cornelius",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "courtier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "fortinbras@kingdom.dk",
    name: "Fortinbras",
    password: "letmein",
    location: "Kingdom of Norway",
    gender: "Male",
    bio: "Prince of Norway",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "francisco@kingdom.dk",
    name: "Francisco",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "a soldier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "gertrude@kingdom.dk",
    name: "Gertrude",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Female",
    bio: "Queen of Denmark and mother to Hamlet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "guildenstern@kingdom.dk",
    name: "Guildenstern",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "courtier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "hortario@kingdom.dk",
    name: "Horatio",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "a friend to Hamlet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "laertes@kingdom.dk",
    name: "Laertes",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "son to Polonius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "marcellus@kingdom.dk",
    name: "Marcellus",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "officer",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "ophelia@kingdom.dk",
    name: "Ophelia",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Female",
    bio: "daughter to Polonius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "osric@kingdom.dk",
    name: "Osric",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "courtier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "polonius@kingdom.dk",
    name: "Polonius",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "Lord Chamberlaid",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "reynaldo@kingdom.dk",
    name: "Reynaldo",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "servant to Polonius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "rosencrantz@kingdom.dk",
    name: "Rosencrantz",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "courtier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "voltemand@kingdom.dk",
    name: "Voltemand",
    password: "letmein",
    location: "Kingdom of Denmark",
    gender: "Male",
    bio: "courtier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "prince_escalus@verona.it",
    name: "Prince Escalus",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Prince Escalus, the Prince of Verona, is the Conflictor of the feuding families. Escalus is the voice of authority in Verona.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "abraham@verona.it",
    name: "Abraham",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Servant to Montague",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "balthasar@verona.it",
    name: "Balthazar",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Servant to Romeo",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "benvolio@verona.it",
    name: "Benvolio",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Nephew to Montague, and friend to Romeo",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "capulet@verona.it",
    name: "Capulet",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Head of the house of Capulet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "friar_john@verona.it",
    name: "Friar John",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Franciscan friar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "friar_laurence@verona.it",
    name: "Friar Laurence",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Franciscan friar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "gregory@verona.it",
    name: "Gregory",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Servant to Capulet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "juliet@verona.it",
    name: "Juliet",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Female",
    bio: "Daughter of Capulet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lady_capulet@verona.it",
    name: "Lady Capulet",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Female",
    bio: "Wife of Capulet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lady_montague@verona.it",
    name: "Lady Montague",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Female",
    bio: "Wife to Montague",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "mercutio@verona.it",
    name: "Mercutio",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Kindsman to Escalus the prince, and friend to Romeo",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "montague@verona.it",
    name: "Montague",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Head of the house of Montague",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "nurse@verona.it",
    name: "Nurse",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Female",
    bio: "Nurse",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "page@verona.it",
    name: "Page",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Page to Paris",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "paris@verona.it",
    name: "Paris",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "A young nobleman, kinsman to Escalus the prince",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "peter@verona.it",
    name: "Peter",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Servant to Juliet's nurse",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "romeo@verona.it",
    name: "Romeo",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Son to Montague",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "sampson@verona.it",
    name: "Sampson",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Servant to Montague",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "second_capulet@verona.it",
    name: "Second Capulet",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "An old man, cousin to Capulet",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "page@verona.it",
    name: "Page",
    password: "letmein",
    location: "Verona, Italy",
    gender: "Male",
    bio: "Page to Paris",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "viola@illyria.com",
    name: "Viola",
    password: "letmein",
    location: "Illyria",
    gender: "Female",
    bio: "Sebastian's twin sister, a shipwrecked young lady, the heroine of the play, later disguised as a young man named Cesario.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "sebastian@illyria.com",
    name: "Sebastian",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "Viola's twin brother, supposedly drowned in the shipwreck, but actually alive and visiting Illyria.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "duke_orsino@illyria.com",
    name: "Duke Orsino",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "Duke of Illyria",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "olivia@illyria.com",
    name: "Olivia",
    password: "letmein",
    location: "Illyria",
    gender: "Female",
    bio: "Duke of Illyria",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "malvolio@illyria.com",
    name: "Malvolio",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "steward in the household of Olivia",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "maria@illyria.com",
    name: "Maria",
    password: "letmein",
    location: "Illyria",
    gender: "Female",
    bio: "Olivia's gentlewoman",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "sir_toby_belch@illyria.com",
    name: "Sir Toby Belch",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "Olivia's uncle",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "sir_andrew_aguecheek@illyria.com",
    name: "Sir Andrew Aguecheek",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "a rich man who Sir Toby brings to be Olivia's wooer",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "feste@illyria.com",
    name: "Feste",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "the clown, or jester, of Olivia's household",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "fabian@illyria.com",
    name: "Fabian",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "a servant and friend to Sir Toby",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "antonio@illyria.com",
    name: "Antonio",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "a captain and friend to Sebastian",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "valentine@illyria.com",
    name: "Valentine",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "a gentleman attending on the Duke",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "curio@illyria.com",
    name: "Curio",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "a gentleman attending on the Duke",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "captain@illyria.com",
    name: "Captain",
    password: "letmein",
    location: "Illyria",
    gender: "Male",
    bio: "friend to Olivia",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "duncan@macbeth.scot",
    name: "Duncan",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "King of Scotland",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "malcolm@macbeth.scot",
    name: "Malcolm",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Duncan's elder son",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "donalbain@macbeth.scot",
    name: "Donalbain",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Duncan's younger son",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "macbeth@macbeth.scot",
    name: "Macbeth",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "a general in the army of King Duncan; originally Thane of Glamis, then Thane of Cawdor, and later King of Scotland",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lady_macbeth@macbeth.scot",
    name: "Lady Macbeth",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Female",
    bio: "Macbeth's wife, and later Queen of Scotland",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "banquo@macbeth.scot",
    name: "Banquo",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Macbeth's friend and a general in the army of King Duncan",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "fleance@macbeth.scot",
    name: "Fleance",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Banquo's son",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "macduff@macbeth.scot",
    name: "Macduff",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Thane of Fife",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lady_macduff@macbeth.scot",
    name: "Lady Macduff",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Female",
    bio: "Macduff's wife",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "ross@macbeth.scot",
    name: "Ross",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Scottish Thane",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lennox@macbeth.scot",
    name: "Lennox",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Scottish Thane",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "angus@macbeth.scot",
    name: "Angus",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Scottish Thane",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "menteith@macbeth.scot",
    name: "Menteith",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Scottish Thane",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "caithness@macbeth.scot",
    name: "Caithness",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Scottish Thane",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "siward@macbeth.scot",
    name: "Siward",
    password: "letmein",
    location: "England",
    gender: "Male",
    bio: "General of the English Forces",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "young_siward@macbeth.scot",
    name: "Young Siward",
    password: "letmein",
    location: "England",
    gender: "Male",
    bio: "Siward's son",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "seyton@macbeth.scot",
    name: "Seyton",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Male",
    bio: "Macbeth's armourer",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "hecate@macbeth.scot",
    name: "Hecate",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Female",
    bio: "Queen of the witches",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "witches_no1@macbeth.scot",
    name: "Witch No. 1",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Female",
    bio: "a witch",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "witches_no2@macbeth.scot",
    name: "Witch No. 2",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Female",
    bio: "a witch",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "witches_no3@macbeth.scot",
    name: "Witch No. 3",
    password: "letmein",
    location: "Kingdom of Scotland",
    gender: "Female",
    bio: "a witch",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lear@king.lear",
    name: "King Lear",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "King of Britain",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "goneril@king.lear",
    name: "Goneril",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Female",
    bio: "Lear's eldest daughter",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "regan@king.lear",
    name: "Regan",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Female",
    bio: "Lear's second daughter",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "cordleia@king.lear",
    name: "Cordelia",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Female",
    bio: "Lear's youngest daughter",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "duke_of_albany@king.lear",
    name: "Duke of Albany",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Goneril's husband",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "duke_of_cornwall@king.lear",
    name: "Duke of Corwall",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Regan's husband",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "earl_of_gloucester@king.lear",
    name: "Earl of Gloucester",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Earl of Gloucester",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "earl_of_kent@king.lear",
    name: "Earl of Kent",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "later disguised as Caius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "edgar@king.lear",
    name: "Edgar",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Gloucester's son",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "edmund@king.lear",
    name: "Edmund",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Gloucester's illegitimate son",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "oswald@king.lear",
    name: "Oswald",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Goneril's steward",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "fool@king.lear",
    name: "Fool",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "Lear's fool",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "king_of_france@king.lear",
    name: "King of France",
    password: "letmein",
    location: "Kingdom of France",
    gender: "Male",
    bio: "suitor and later husband to Cordelia",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "duke_of_burgundy@king.lear",
    name: "Duke of Burgundy",
    password: "letmein",
    location: "Duchy of Burgundy",
    gender: "Male",
    bio: "suitor to Cordelia",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "curan@king.lear",
    name: "Curan",
    password: "letmein",
    location: "Kingdom of Britain",
    gender: "Male",
    bio: "courtier",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "theseus@midsummer.night",
    name: "Theseus",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "Duke of Athens",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "hippolyta@midsummer.night",
    name: "Hippolyta",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "Queen of the Amazons, betrothed to Theseus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "philostrate@midsummer.night",
    name: "Philostrate",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "Master of the Revels",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "egeus@midsummer.night",
    name: "Egeus",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "father of Hermia, wants her to marry Demetrius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "hermia@midsummer.night",
    name: "Hermia",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "daughter of Egeus, in love with Lysander",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "helena@midsummer.night",
    name: "Helena",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "in love with Demetrius, Hermia's friend",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lysander@midsummer.night",
    name: "Lysander",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "in love with Hermia at first but later loves Helena and then returns to loving Hermia",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "demetrius@midsummer.night",
    name: "Demetrius",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "initially loves Hermia but later loves Helena",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "oberon@midsummer.night",
    name: "Oberon",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "Titania's husband and King of the Fairies",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "titania@midsummer.night",
    name: "Titania",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "Oberon's wife and Queen of the Fairies",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "puck@midsummer.night",
    name: "Robin Goodfellow/Puck",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "servant to Oberon",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "peaseblossom@midsummer.night",
    name: "Peaseblossom",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "fairy servant to Titania",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "cobweb@midsummer.night",
    name: "Cobweb",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "fairy servant to Titania",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "moth@midsummer.night",
    name: "Moth",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "fairy servant to Titania",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "mustardseed@midsummer.night",
    name: "Mustardseed",
    password: "letmein",
    location: "Greece",
    gender: "Female",
    bio: "fairy servant to Titania",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "peter_quince@midsummer.night",
    name: "Peter Quince",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "carpenter, leads the troupe and plays Prologue",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "nick_bottom@midsummer.night",
    name: "Nick Bottom",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "weaver, plays Pyramus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "francis_flute@midsummer.night",
    name: "Francis Flute",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "bellows-mender, plays Thisbe",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "robin_starveling@midsummer.night",
    name: "Robin Starveling",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "tailor, plays Moonshine",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "tom_snout@midsummer.night",
    name: "Tom Snout",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "tinker, plays Wall",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "snug@midsummer.night",
    name: "Snug",
    password: "letmein",
    location: "Greece",
    gender: "Male",
    bio: "joiner, plays Lion",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "anthony@julius.csr",
    name: "Marcus Antonius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Marcus Antonius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "artemidorus@julius.csr",
    name: "Artemidorus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "of Cnidos, a teacher of rhetoric.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "brutus@julius.csr",
    name: "Marcus Brutus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Marcus Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "caesar@julius.csr",
    name: "Julius Caesar",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Julius Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "calpurnia@julius.csr",
    name: "Calpurnia",
    password: "letmein",
    location: "Rome",
    gender: "Female",
    bio: "wife to Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "casca@julius.csr",
    name: "Casca",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "cassius@julius.csr",
    name: "Cassius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "cicero@julius.csr",
    name: "Cicero",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Senator",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "cinna@julius.csr",
    name: "Cinna",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "claudius@julius.csr",
    name: "Claudius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "clitus@julius.csr",
    name: "Clitus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "dardanius@julius.csr",
    name: "Dardanius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "decius@julius.csr",
    name: "Decius Brutus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "flavius@julius.csr",
    name: "Flavius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a tribune",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lepidus@julius.csr",
    name: "Marcus Antonius Lepidus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Marcus Antonius Lepidus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "ligarius@julius.csr",
    name: "Ligarius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lucilius@julius.csr",
    name: "Lucilius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "friend to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lucius@julius.csr",
    name: "Lucius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "marullus@julius.csr",
    name: "Marullus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a tribune",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "messala@julius.csr",
    name: "Messala",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "friend to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "metellus_cimber@julius.csr",
    name: "Metellus Cimber",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "octavius@julius.csr",
    name: "Octavius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Octavius Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "pindarus@julius.csr",
    name: "Pindarus",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Cassius",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "popilius@julius.csr",
    name: "Popilius Lena",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Popilius Lena",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "portia@julius.csr",
    name: "Portia",
    password: "letmein",
    location: "Rome",
    gender: "Female",
    bio: "wife to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "publius@julius.csr",
    name: "Publius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "Senator",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "strato@julius.csr",
    name: "Strato",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "tintinius@julius.csr",
    name: "Tintinius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "friend to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "trebonius@julius.csr",
    name: "Trebonius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "a conspirator against Caesar",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "varro@julius.csr",
    name: "Varro",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "servant to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "volumnius@julius.csr",
    name: "Volumnius",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "friend to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "young_cato@julius.csr",
    name: "Young Cato",
    password: "letmein",
    location: "Rome",
    gender: "Male",
    bio: "friend to Brutus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "othello@othello.com",
    name: "Othello",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "General in the Venetian military",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "desdemona@othello.com",
    name: "Desdemona",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Female",
    bio: "Othello's wife; daughter of Brabantio",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "iago@othello.com",
    name: "Iago",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "Othello's trusted, but jealous and traitorous ensign",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "michael@othello.com",
    name: "Michael Cassio",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "Othello's loyal and most beloved lieutenant",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "emilia@othello.com",
    name: "Emilia",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Female",
    bio: "Iago's wife and Desdemona's maidservant",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "bianca@othello.com",
    name: "Bianca",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Female",
    bio: "Cassio's lover",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "brabantio@othello.com",
    name: "Brabantio",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "Venetian senator and Desdemona's father",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "roderigo@othello.com",
    name: "Roderigo",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "dissolute Venetian, in love with Desdemona",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "gratiano@othello.com",
    name: "Gratiano",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "Brabantio's brother",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "lodovico@othello.com",
    name: "Lodovico",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "Brabantio's kinsman and Desdemona's cousin",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "montano@othello.com",
    name: "Montano",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "Othello's Venetian predecessor in the government of Cyprus",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "clown@othello.com",
    name: "Clown",
    password: "letmein",
    location: "Most Serene Republic of Venice",
    gender: "Male",
    bio: "servant",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "benedick@muchadoabout.nothing",
    name: "Benedick",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "A lord and soldier from Padua; companion of Don Pedro",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "pedro@muchadoabout.nothing",
    name: "Don Pedro",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Prince of Aragon",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "john@muchadoabout.nothing",
    name: "Don John",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "'the Bastard Prince,' brother of Don Pedro.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "claudio@muchadoabout.nothing",
    name: "Claudio, of Florence",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "A count, companion of Don Pedro, friend to Benedick.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "leonato@muchadoabout.nothing",
    name: "Leonato",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Governor of Messina; Hero's father.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "antonio@muchadoabout.nothing",
    name: "Antonio",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Brother of Leonato.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "balthasar@muchadoabout.nothing",
    name: "Balthasar",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Attendant on Don Pedro, a singer.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "borachio@muchadoabout.nothing",
    name: "Borachio",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Follower of Don John.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "conrade@muchadoabout.nothing",
    name: "Conrade",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Follower of Don John.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "innogen@muchadoabout.nothing",
    name: "Innogen",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Female",
    bio: "A ghost character in early editions as Leonato's wife",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "beatrice@muchadoabout.nothing",
    name: "Beatrice",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Female",
    bio: "Niece of Leonato.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "hero@muchadoabout.nothing",
    name: "Hero",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Female",
    bio: "Daughter of Leonato.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "margaret@muchadoabout.nothing",
    name: "Margaret",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Female",
    bio: "Waiting-gentlewoman attendant on Hero.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "ursula@muchadoabout.nothing",
    name: "Ursula",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Female",
    bio: "Waiting-gentlewoman attendant on Hero.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "dogberry@muchadoabout.nothing",
    name: "Dogberry",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "The constable in charge of Messina's night watch.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "dogberry@muchadoabout.nothing",
    name: "Dogberry",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "The constable in charge of Messina's night watch.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "verges@muchadoabout.nothing",
    name: "Verges",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "The Headborough, Dogberry's partner.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "friar_francis@muchadoabout.nothing",
    name: "Friar Francis",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "A priest.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "sexton@muchadoabout.nothing",
    name: "A Sexton",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "The judge of the trial of Borachio.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "boy@muchadoabout.nothing",
    name: "A Boy",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Serving Benedick.",
    avatar_url: Faker::Avatar.image
  },
  {
    email: "the_watch@muchadoabout.nothing",
    name: "The Watch",
    password: "letmein",
    location: "Messina, Sicily",
    gender: "Male",
    bio: "Watchmen of Messina",
    avatar_url: Faker::Avatar.image
  }
  ])

Group.create([
  {
    title: "Hamleters",
    description: "Set in the Kingdom of Denmark, the group dramatises the revenge Prince Hamlet is called to wreak upon his uncle, Claudius, by the ghost of Hamlet's father, King Hamlet. Claudius had murdered his own brother and seized the throne, also marrying his deceased brother's widow.",
    location: "Kingdom of Denmark",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457235758/Henry_Fuseli_rendering_of_Hamlet_and_his_father_s_Ghost_buwuib.jpg",
    organizer_id: 2
  },
  {
    title: "The Romeo and Juliet Group",
    description: "A group about two young star-crossed lovers whose deaths ultimately reconcile their feuding families.",
    location: "Verona, Italy",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457291794/romeo-juliet-before-friar-lawrence-karl-ludwig-becker-1345614016_org_lxw2cm.jpg",
    organizer_id: 19
  },
  {
    title: "The Twelfth Night Meeting",
    description: "This group centres on the twins Viola and Sebastian, who are separated in a shipwreck. Viola (who is disguised as a boy) falls in love with Duke Orsino, who in turn is in love with the Countess Olivia. Upon meeting Viola, Countess Olivia falls in love with her thinking she is a man.",
    location: "Illyria",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457293667/R_Staines_Malvolio_Shakespeare_Twelfth_Night_zbg9nr.jpg",
    organizer_id: 40
  },
  {
    title: "The Macbeth Group",
    description: "Macbeth is Shakespeare's shortest tragedy, and tells the story of a brave Scottish general named Macbeth who receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders King Duncan and takes the throne for himself. He is then wracked with guilt and paranoia, and he soon becomes a tyrannical ruler as he is forced to commit more and more murders to protect himself from enmity and suspicion. The bloodbath and consequent civil war swiftly take Macbeth and Lady Macbeth into the realms of arrogance, madness, and death.",
    location: "Scotland",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457326059/MacbethAndBanquo-Witches_ohg30z.jpg",
    organizer_id: 57
  },
  {
    title: "A King Lear Meeting",
    description: "This group depicts the gradual descent into madness of King Lear, after he disposes of his kingdom giving bequests to two of his three daughters based on their flattery of him, bringing tragic consequences for all.",
    location: "Kingdom of Britain",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457295956/William_Dyce_-_King_Lear_and_the_Fool_in_the_Storm_tqpf1k.jpg",
    organizer_id: 75
  },
  {
    title: "A Midsummer Night's Dreamers",
    description: "This group encompasses the adventures of four young Athenian lovers and a group of six amateur actors who are controlled and manipulated by the fairies who inhabit the forest in which most of the play is set.",
    location: "Athens, Greece",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457296204/800px-Oberon__Titania_and_Puck_with_Fairies_Dancing._William_Blake._c.1786_g0bttc.jpg",
    organizer_id: 98
  },
  {
    title: "Julius Caesar's Citizens",
    description: "Although the title is Julius Caesar, Caesar is not the most visible character in the group's events, appearing alive in only three event. Marcus Brutus speaks more than four times as many lines, and the central psychological drama of the play focuses on Brutus' struggle between the conflicting demands of honor, patriotism and friendship.",
    location: "Rome, The Roman Empire",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457296858/tumblr_nlaaseW0So1rwjpnyo1_1280_ttca5a.jpg",
    organizer_id: 114
  },
  {
    title: "The Othello Meeting",
    description: "This tragic group revolves around four central characters: Othello, a Moorish general in the Venetian army; his beloved wife, Desdemona; his loyal lieutenant, Cassio; and his trusted but ultimately unfaithful ensign, Iago.",
    location: "Most Serene Republic of Venice",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457297912/Othello_nrnruj.jpg",
    organizer_id: 143
  },
  {
    title: "Much Ado About Nothing",
    description: "By means of 'noting' (which, in Shakespeare's day, sounded the same as 'nothing,' and which is gossip, rumour, and overhearing), Benedick and Beatrice are tricked into confessing their love for each other, and Claudio is tricked into rejecting Hero at the altar on the erroneous belief that she has been unfaithful. At the end, Benedick and Beatrice join forces to set things right, and the others join in a dance celebrating the marriages of the two couples.",
    location: "Messina, Sicily",
    banner_url: "http://res.cloudinary.com/deh4rnozs/image/upload/v1457298428/Much_Ado_About_Nothing_by_Alfred_Elmore_1846_g510om.jpg",
    organizer_id: 155
  }
  ])

Event.create([
  {
    title: "Act II, Scene II",
    description: "What a
piece of work is a man! how noble in reason! how infinite in
faculties! in form and moving how express and admirable! in
action how like an angel! in apprehension how like a god! the
beauty of the world, the paragon of animals! And yet to me what
is this quintessence of dust? Man delights not me- no, nor woman
neither, though by your smiling you seem to say so.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Elsinore. A room in the Castle.",
    host_id: 2,
    group_id: 1
  },
  {
    title: "Act III, Scene I",
    description: "To be, or not to be: that is the question.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Elsinore. A room in the Castle.",
    host_id: 12,
    group_id: 1
  },
  {
    title: "Act II, Scene III",
    description: "Wisely and slow; they stumble that run fast.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Friar Laurence’s cell.",
    host_id: 24,
    group_id: 2
  },
  {
    title: "Act II, Scene II",
    description: "Sweet, so would I:
Yet I should kill thee with much cherishing.
Good night, good night! parting is such
sweet sorrow,
That I shall say good night till it be morrow.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Capulet’s orchard.",
    host_id: 27,
    group_id: 2
  },
  {
    title: "Act II, Scene V",
    description: "'If this fall into thy hand, revolve. In my stars I
am above thee; but be not afraid of greatness: some
are born great, some achieve greatness, and some
have greatness thrust upon 'em. Thy Fates open
their hands; let thy blood and spirit embrace them;
and, to inure thyself to what thou art like to be, 1170
cast thy humble slough and appear fresh. Be
opposite with a kinsman, surly with servants; let
thy tongue tang arguments of state;",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Olivia's garden.",
    host_id: 44,
    group_id: 3
  },
  {
    title: "Act III, Scene I",
    description: "But rather reason thus with reason fetter,
Love sought is good, but given unsought better.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Olivia's garden.",
    host_id: 43,
    group_id: 3
  },
  {
    title: "Act I, Scene I",
    description: "First Witch: When shall we three meet again
In thunder, lightning, or in rain?
Second Witch: When the hurlyburly's done,
When the battle's lost and won.
Third Witch: That will be ere the set of sun.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "A desert place.",
    host_id: 72,
    group_id: 4
  },
  {
    title: "Act V, Scene V",
    description: "Out, out, brief candle!
Life's but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing. ",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Dunsinane. Within the castle.",
    host_id: 57,
    group_id: 4
  },
  {
    title: "Act I, Scene IV",
    description: "Mark it, nuncle.
Have more than thou showest,
Speak less than thou knowest,
Lend less than thou owest,
Ride more than thou goest,
Learn more than thou trowest,
Set less than thou throwest;
Leave thy drink and thy whore,
And keep in-a-door,
And thou shalt have more
Than two tens to a score.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "The Duke of Albany’s Palace.",
    host_id: 86,
    group_id: 5
  },
  {
    title: "Act I, Scene I",
    description: "The princes, France and Burgundy,
Great rivals in our youngest daughter's love,
Long in our court have made their amorous sojourn,
And here are to be answer'd. Tell me, my daughters
(Since now we will divest us both of rule,
Interest of territory, cares of state),
Which of you shall we say doth love us most?",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "King Lear's Palace.",
    host_id: 75,
    group_id: 5
  },
  {
    title: "Act V, Scene I",
    description: "If we shadows have offended,
Think but this, and all is mended,
That you have but slumber'd here
While these visions did appear.
And this weak and idle theme,
No more yielding but a dream,
Gentles, do not reprehend:
if you pardon, we will mend:
And, as I am an honest Puck,
If we have unearned luck
Now to 'scape the serpent's tongue,
We will make amends ere long;
Else the Puck a liar call;
So, good night unto you all.
Give me your hands, if we be friends,
And Robin shall restore amends.",
    start_time: Faker::Date.between(415.years.ago, 416.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "Athens. The palace of THESEUS.",
    host_id: 100,
    group_id: 6
  },
  {
    title: "Act II, Scene I",
    description: "I know a bank where the wild thyme blows,
Where oxlips and the nodding violet grows,
Quite over-canopied with luscious woodbine,
With sweet musk-roses and with eglantine:",
    start_time: Faker::Date.between(415.years.ago, 414.years.ago),
    end_time: Faker::Date.between(414.years.ago, 415.years.ago),
    location: "A wood near Athens.",
    host_id: 98,
    group_id: 6
  },
  {
    title: "Act I, Scene II",
    description: "Men at some time are masters of their fates:
The fault, dear Brutus, is not in our stars,
But in ourselves, that we are underlings.",
    start_time: Faker::Date.between(2101.years.ago, 2100.years.ago),
    end_time: Faker::Date.between(2100.years.ago, 2099.years.ago),
    location: "A public place.",
    host_id: 114,
    group_id: 7
  },
  {
    title: "Act I, Scene II",
    description: "There is a tide in the affairs of men,
  Which, taken at the flood, leads on to fortune;
  Omitted, all the voyage of their life
  Is bound in shallows and in miseries.
  On such a full sea are we now afloat;
  And we must take the current when it serves,
  Or lose our ventures.",
    start_time: Faker::Date.between(2101.years.ago, 2100.years.ago),
    end_time: Faker::Date.between(2100.years.ago, 2099.years.ago),
    location: "Brutus's tent.",
    host_id: 113,
    group_id: 7
  },
  {
    title: "Act III, Scene III",
    description: "O, beware, my lord, of jealousy;
It is the green-ey'd monster, which doth mock
The meat it feeds on.",
    start_time: Faker::Date.between(600.years.ago, 599.years.ago),
    end_time: Faker::Date.between(599.years.ago, 598.years.ago),
    location: "The garden of the castle.",
    host_id: 145,
    group_id: 8
  },
  {
    title: "Act II, Scene III",
    description: "Reputation is an idle and most false imposition; oft got without merit, and lost without deserving.",
    start_time: Faker::Date.between(600.years.ago, 599.years.ago),
    end_time: Faker::Date.between(599.years.ago, 598.years.ago),
    location: "A hall in the castle.",
    host_id: 145,
    group_id: 8
  },
  {
    title: "Act V, Scene IV",
    description: "Why, what's the matter,
That you have such a February face,
So full of frost, of storm and cloudiness?",
    start_time: Faker::Date.between(600.years.ago, 599.years.ago),
    end_time: Faker::Date.between(599.years.ago, 598.years.ago),
    location: "A room in Leonato's house.",
    host_id: 156,
    group_id: 9
  },
  {
    title: "Act II, Scene I",
    description: "He that hath a
beard is more than a youth, and he that hath no
beard is less than a man: and he that is more than
a youth is not for me, and he that is less than a
man, I am not for him",
    start_time: Faker::Date.between(600.years.ago, 599.years.ago),
    end_time: Faker::Date.between(599.years.ago, 598.years.ago),
    location: "A hall in Leonato's house.",
    host_id: 165,
    group_id: 9
  },
])

UserEvent.create([
  {
    user_id: 3,
    event_id: 1
  },
  {
    user_id: 8,
    event_id: 1
  },
  {
    user_id: 17,
    event_id: 1
  },
  {
    user_id: 3,
    event_id: 1
  },
  {
    user_id: 15,
    event_id: 1
  },
  {
    user_id: 18,
    event_id: 1
  },
  {
    user_id: 3,
    event_id: 2
  },
  {
    user_id: 17,
    event_id: 2
  },
  {
    user_id: 9,
    event_id: 2
  },
  {
    user_id: 8,
    event_id: 2
  },
  {
    user_id: 15,
    event_id: 2
  },
  {
    user_id: 13,
    event_id: 2
  },
  {
    user_id: 2,
    event_id: 2
  },
  {
    user_id: 24,
    event_id: 3
  },
  {
    user_id: 36,
    event_id: 3
  },
  {
    user_id: 27,
    event_id: 4
  },
  {
    user_id: 36,
    event_id: 4
  },
  {
    user_id: 46,
    event_id: 5
  },
  {
    user_id: 47,
    event_id: 5
  },
  {
    user_id: 45,
    event_id: 5
  },
  {
    user_id: 44,
    event_id: 5
  },
  {
    user_id: 43,
    event_id: 6
  },
  {
    user_id: 40,
    event_id: 6
  },
  {
    user_id: 46,
    event_id: 6
  },
  {
    user_id: 47,
    event_id: 6
  },
  {
    user_id: 48,
    event_id: 6
  },
  {
    user_id: 72,
    event_id: 7
  },
  {
    user_id: 73,
    event_id: 7
  },
  {
    user_id: 74,
    event_id: 7
  },
  {
    user_id: 57,
    event_id: 8
  },
  {
    user_id: 70,
    event_id: 8
  },
  {
    user_id: 86,
    event_id: 9
  },
  {
    user_id: 82,
    event_id: 9
  },
  {
    user_id: 82,
    event_id: 9
  },
  {
    user_id: 75,
    event_id: 9
  },
  {
    user_id: 85,
    event_id: 9
  },
  {
    user_id: 79,
    event_id: 9
  },
  {
    user_id: 76,
    event_id: 9
  },
  {
    user_id: 82,
    event_id: 10
  },
  {
    user_id: 81,
    event_id: 10
  },
  {
    user_id: 84,
    event_id: 10
  },
  {
    user_id: 75,
    event_id: 10
  },
  {
    user_id: 78,
    event_id: 10
  },
  {
    user_id: 77,
    event_id: 10
  },
  {
    user_id: 88,
    event_id: 10
  },
  {
    user_id: 87,
    event_id: 10
  },
  {
    user_id: 91,
    event_id: 11
  },
  {
    user_id: 90,
    event_id: 11
  },
  {
    user_id: 92,
    event_id: 11
  },
  {
    user_id: 96,
    event_id: 11
  },
  {
    user_id: 105,
    event_id: 11
  },
  {
    user_id: 105,
    event_id: 11
  },
  {
    user_id: 109,
    event_id: 11
  },
  {
    user_id: 106,
    event_id: 11
  },
  {
    user_id: 107,
    event_id: 11
  },
  {
    user_id: 108,
    event_id: 11
  },
  {
    user_id: 97,
    event_id: 11
  },
  {
    user_id: 98,
    event_id: 11
  },
  {
    user_id: 100,
    event_id: 12
  },
  {
    user_id: 98,
    event_id: 12
  },
  {
    user_id: 99,
    event_id: 12
  },
  {
    user_id: 95,
    event_id: 12
  },
  {
    user_id: 97,
    event_id: 12
  },
  {
    user_id: 114,
    event_id: 13
  },
  {
    user_id: 116,
    event_id: 13
  },
  {
    user_id: 115,
    event_id: 13
  },
  {
    user_id: 111,
    event_id: 13
  },
  {
    user_id: 113,
    event_id: 14
  },
  {
    user_id: 117,
    event_id: 14
  },
  {
    user_id: 130,
    event_id: 14
  },
  {
    user_id: 128,
    event_id: 14
  },
  {
    user_id: 140,
    event_id: 14
  },
  {
    user_id: 114,
    event_id: 14
  },
  {
    user_id: 120,
    event_id: 14
  },
  {
    user_id: 144,
    event_id: 15
  },
  {
    user_id: 147,
    event_id: 15
  },
  {
    user_id: 146,
    event_id: 15
  },
  {
    user_id: 145,
    event_id: 15
  },
  {
    user_id: 143,
    event_id: 15
  },
  {
    user_id: 143,
    event_id: 16
  },
  {
    user_id: 146,
    event_id: 16
  },
  {
    user_id: 145,
    event_id: 16
  },
  {
    user_id: 153,
    event_id: 16
  },
  {
    user_id: 144,
    event_id: 16
  },
  {
    user_id: 172,
    event_id: 17
  },
  {
    user_id: 159,
    event_id: 17
  },
  {
    user_id: 160,
    event_id: 17
  },
  {
    user_id: 155,
    event_id: 17
  },
  {
    user_id: 156,
    event_id: 17
  },
  {
    user_id: 158,
    event_id: 17
  },
  {
    user_id: 160,
    event_id: 17
  },
  {
    user_id: 165,
    event_id: 17
  },
  {
    user_id: 159,
    event_id: 18
  },
  {
    user_id: 160,
    event_id: 18
  },
  {
    user_id: 166,
    event_id: 18
  },
  {
    user_id: 165,
    event_id: 18
  },
  {
    user_id: 156,
    event_id: 18
  },
  {
    user_id: 158,
    event_id: 18
  },
  {
    user_id: 155,
    event_id: 18
  },
  {
    user_id: 161,
    event_id: 18
  },
  {
    user_id: 157,
    event_id: 18
  },
  {
    user_id: 162,
    event_id: 18
  },
  {
    user_id: 167,
    event_id: 18
  },
  {
    user_id: 168,
    event_id: 18
  },
])

(1..18).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 1)
end

(19..39).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 2)
end

(40..53).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 3)
end

(54..74).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 4)
end

(75..89).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 5)
end

(90..110).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 6)
end

(111..142).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 7)
end

(143..154).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 8)
end

(155..175).each do |i|
  UserGroup.create(
    user_id: i,
    group_id: 9)
end
