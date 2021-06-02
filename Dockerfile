FROM manish0890/ubuntu-chrome:v1

RUN mkdir /app
WORKDIR /app

ADD . /app

RUN npm install --silent

CMD ARG_HEADLESS='--headless' npm run test
