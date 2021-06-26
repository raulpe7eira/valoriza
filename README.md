# Valoriza API

This repository is the code corresponding to the [nlw#6 - trilha nodejs](https://nextlevelweek.com/) lab.

> The project simulates an compliments management API that allows to register users, tags, compliments and authenticate users.

## Gets dependencies, setups database and starts application

```bash
cd valoriza
npm install
npm run typeorm migration:run
npm run dev
```

## How to use?

```bash
# authenticates user
curl -X POST 'http://localhost:3000/login' \
-H 'Content-Type: application/json' \
-d '{
    "email": "raul@mail.com",
    "password": "1234"
}'

# creates user
curl -X POST 'http://localhost:3000/users' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Raul Pereira",
    "email": "raul@mail.com",
    "password": "1234",
	"admin": true
}'

# creates tag
curl -X POST 'http://localhost:3000/tags' \
-H 'Content-Type: application/json' \
-d '{
    "name": "monstro"
}'

# creates compliment (
#   replaces curly braces:
#     {tag_id} : tag identifier
#     {user_id} : user identifier
# )
curl -X POST 'http://localhost:3000/compliments' \
-H 'Content-Type: application/json' \
-d '{
    "tag_id": "{tag_id}",
    "user_sender": "{user_id}",
    "user_receiver": "{user_id}",
    "message": "champion \o/"
}'
```
