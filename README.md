# rubikvn

## Deploy with local Node
1. Install nodejs on your machine
2. Run 
```
npm install
npm start
```
3. Open [http://localhost:3000](http://localhost:3000)

## Deploy with Docker
1. Install Docker and docker-compose
2. Run
```shell
docker-compose up
```
3. Open [http://localhost:3000](http://localhost:3000)

## Set up DB
1. Download WCA DB export (SQL file): https://www.worldcubeassociation.org/results/misc/export.html
2. MySQL config:
  user: 'rubikvn',
  password: 'admin',
  database: 'wca_db'
3. Run WCA SQL file on wca_db
4. Run "procedure" and "vietnam_only" files
