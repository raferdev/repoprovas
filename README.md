<p align="center">
  <a href="https://github.com/rafael-f/projeto18-valex">
    <img src="./readme.png" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    Valex
  </h3>
</p>

## About 
This is a simple API to manage vouchers cards vouchers.

## Usage

```bash
$ git clone https://github.com/rafael-f/projeto20-repoprovas

$ cd projeto20-repoprovas

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
