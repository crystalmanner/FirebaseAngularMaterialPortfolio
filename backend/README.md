## Getting Started

npm start

## server running by pm2

npm install -g pm2

pm2 start server.js

## mongodb dump/restore

### dump

(mongodump -d <database_name> -o <directory_backup>)

mongodump -d jperfectsolution_db -o dump_db

### restore db

(mongorestore -d <database_name> <directory_backup>)

mongorestore -d jperfectsolution_db dump_db/jperfectsolution_db --drop
