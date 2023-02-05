### First steps :

1. `backend/.env` : create a .env file based on (backend/.env.sample)
2. `frontend/.env` : create a .env file based on (frontend/.env.sample)
3. `npm run setup` : Initialization of frontend and backend, as well as all toolings
4. `npm run migrate` : Run the database migration script
5. `npm run dev` : Starts both servers (frontend + backend) in one terminal

## Concept
    Site created during a Checkpoint 4 at Wild Code School in Nantes.
The web application collects a list of artist-singers, their albums and songs.

SIDE USER
    There are three main pages in navbar/menu burger that sort the data from the database:
        `Artists` button that displays a list of all Artists with image
        `Albums` button that displays a list of all albums with image
        `Tracks` button that displays a list of all songs
    Choosing:
        `artist card` - displays a list of albums of this artist with details and image
        `album card` - displays a list of tracks of this album with details and image
        `track card` - display a youtube video of this track with details

SIDE ADMIN
    Admin can fully update the database.
    Images and youtube videos are based on url.
    Button `Admin database` in navbar displays three options:
    `UPDATE ARTISTS`, `UPDATE ALBUMS`, `UPDATE TRACKS` 
        Each option displays respectively three options :
            `ADD`, `UPDATE`, `DELETE`

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

