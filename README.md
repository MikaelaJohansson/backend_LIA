# React + Vite

# LIA App Frontend

Detta projekt är ett frontend-projekt byggt med React och Vite. Här är en snabb överblick över hur du kommer igång med projektet.

## Kom igång snabbt (TTFHW)

Följ dessa steg för att snabbt komma igång med utveckling av detta projekt:

### Installation och setup

1. **Klona repositoryt**:
   ```bash
   git https://github.com/MikaelaJohansson/backend_LIA.git
   cd backend_LIA

2. Installera beroenden:
   npm install

3. Starta utvecklingsservern:
   npm run dev

### Start a backend (bash1-starta backend, bash2-testa kommand)
  ```bash
curl -X POST http://localhost:3000/api/user -H 'Content-Type: application/json' -d '{"name":"mi","password":"1234"}'
curl -X GET http://localhost:3000/api/user
curl -X GET http://localhost:3000/api/user/uuid som du skapade
curl -X PUT http://localhost:3000/api/user/uuid som du skapade -H 'Content-Type: application/json' -d '{"name":"newName","password":"pw"}'
curl -X DELETE http://localhost:3000/api/user/uuid som du skapade

#Resultat
Du kan ser resultat av get http://localhost:3000/api/user
som nedan
[
    {
        "id": "ab214776-8d05-4ebd-8a25-0d9271631b44",
        "name": "mi",
        "password": "1234"
    }
]
