- we are all developers (ballmer)
- we like building stuff (bob the builder)
- but sometimes a full application is too much (webpack, babel hackathon tweet)











- spreadsheets are the basic tool for many people
- default interface and way of thinking about data
- "most saas startups need to fight excel"
- spreadsheets get shit done

sheet: https://docs.google.com/spreadsheets/d/19aeATRFd9eWX0Jt0FUCuM7-j3r6bvCaaupIhSsU9xzA/edit#gid=292857113

todos mock get api: https://6075a7770baf7c0017fa6b0e.mockapi.io/api/v1/todos

docker run -p 8080:80 kennethreitz/httpbin

docker run -p 8080:80 -e GUNICORN_CMD_ARGS="--capture-output --error-logfile - --access-logfile - --access-logformat '%(h)s %(t)s %(r)s %(s)s Host: %({Host}i)s}'" kennethreitz/httpbin

docker run -p 8080:80 -e GUNICORN_CMD_ARGS="--capture-output --error-logfile - --access-logfile - --access-logformat '%(h)s %(l)s %(u)s %(t)s \"%(r)s\" %(s)s %(b)s \"%(f)s\" \"%(a)s\"'" kennethreitz/httpbin

---
~/app/ngrok http 8080
---

SHEETSU

data source spreadsheet: 
https://docs.google.com/spreadsheets/d/12edIv-mYPCvSWaFMOqBUaTKhOTO8QcbR0n0tv9sCkGU/edit#gid=0

api url: 
https://sheetsu.com/apis/v1.0su/ac9ea76f05eb