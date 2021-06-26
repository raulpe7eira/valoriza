# Valoriza API

This repository is the code corresponding to the [nlw#6 - trilha nodejs](https://nextlevelweek.com/) lab.

> The project simulates an compliments management API that allows to register users, tags and compliments, view compliments by users with tags.

## Gets dependencies, setups database and starts application

```bash
cd valoriza
npm install
npm run typeorm migration:run
npm run dev
```

## How to use?

```bash
# creates user
curl -X POST 'http://localhost:3000/users' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Raul Pereira",
    "email": "raul@mail.com",
	"admin": true
}'

# creates tag
curl -X POST 'http://localhost:3000/tags' \
-H 'Content-Type: application/json' \
-d '{
    "name": "monstro"
}'
```
