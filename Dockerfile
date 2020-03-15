FROM cypress/included:4.0.2
WORKDIR /cypress

COPY ./cypress cypress
COPY cypress.json .
COPY package.json .

RUN cypress verify 

ENTRYPOINT npm run test:cypress-run-electron