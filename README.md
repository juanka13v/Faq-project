# Todo

## public paths

- /questions
- /tags
- /lenguage

- /question/{id}
- /tag/{id}
- /lenguage/{id}


## private paths

- /questions GET
- /questions POST
- /question/{id} GET
- /question/{id} PUT
- /question/{id} DELETE


## models

question:
- id: mongooseId
- question: string
- simple_answer: string
- detailed_answer: string
- tags: [] strings
- lenguage: [] strings
- code: string



