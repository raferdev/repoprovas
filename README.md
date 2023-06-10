 <h3 align="center">
    Repoprovas
 </h3>

## About 
This readme is a fast and little resume. This app was builded to handle requests of users to search by tests.
## Usage

```bash
$ git clone https://github.com/raferdev/repoprovas

$ cd repoprovas

$ npm install

$ npm run dev
```

API:

```
- POST /signup
    - To create user
    - headers: {}
    - body: {
        "email": (Email),
        "password": (STRING)(LENGTH>=10), "confirmPassword": (SAME PASSWORD)
    }

- POST /signin
    - To signin
    - headers: {}
    - body: {
    "email": (Email),
    "password": (STRING)(LENGTH>=10)
    }

- POST /test
    - To add test
    - headers: { 
         "Authorization" : "Bearer API_KEY"
     }
    - body:  {
    "name": (STRING)(UNIQUE),
    "pdfUrl": (URL),
    "teacher": ("Bruna Hamori" || "Diego Pinho"),
    "discipline": ("HTML e CSS" || "JavaScript"|| "React"||  "Humildade" || "Planejamento" || "Autoconfiança")
    "category": ("Projeto"||"Prática"||"Recuperação")
    
    }
- GET /terms
    - To search disciplines by terms
    - headers: { 
         "Authorization" : "Bearer API_KEY"
     }
    - body: {
    "cardNumber": "STRING_LENGTH_16_CARD_NUMBER",
    "password": "STRING_LENGTH_4"
    }
- GET /teachers
    - To search disciplines by teachers
    - headers: { 
         "Authorization" : "Bearer API_KEY"
     }
    - body: {
    "cardNumber":"STRING_LENGTH_16_CARD_NUMBER",
    "amount": POSITIVE_NUMBER
}
```
