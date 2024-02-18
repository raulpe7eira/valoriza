# Valoriza API

This repository is the code corresponding to the [nlw#6 - trilha nodejs](https://nextlevelweek.com/) lab by Rafael Camarda.

> The project simulates an recognition among teammates management API that allows to register users, tags, compliments with authentication and retrieves some listings.

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

# retrieves created users (
#   replaces curly braces:
#     {token} : authorization token
# )
curl -X GET 'http://localhost:3000/users' \
-H 'Authorization: {token}'

# retrieves received compliments by user (
#   replaces curly braces:
#     {token} : authorization token
# )
curl -X GET 'http://localhost:3000/users/compliments/receive' \
-H 'Authorization: {token}'

# retrieves sent compliments by user (
#   replaces curly braces:
#     {token} : authorization token
# )
curl -X GET 'http://localhost:3000/users/compliments/send' \
-H 'Authorization: {token}'

# creates tag (
#   replaces curly braces:
#     {token} : authorization token
# )
curl -X POST 'http://localhost:3000/tags' \
-H 'Authorization: {token}' \
-H 'Content-Type: application/json' \
-d '{
    "name": "reviewer"
}'

# retrieves created tags (
#   replaces curly braces:
#     {token} : authorization token
# )
curl -X GET 'http://localhost:3000/tags' \
-H 'Authorization: {token}'

# creates compliment (
#   replaces curly braces:
#     {token} : authorization token
#     {tag_id} : tag identifier
#     {user_id} : user identifier
# )
curl -X POST 'http://localhost:3000/compliments' \
-H 'Authorization: {token}' \
-H 'Content-Type: application/json' \
-d '{
    "tag_id": "{tag_id}",
    "user_receiver": "{user_id}",
    "message": "champion \o/"
}'
```
