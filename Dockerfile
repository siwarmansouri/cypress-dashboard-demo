FROM cypress/included:4.0.2
WORKDIR /cypress

COPY ./cypress cypress
COPY cypress.json .
COPY package.json .
COPY cypressThread1.command .
COPY cypressThread2.command .

RUN cypress verify 

ENTRYPOINT npm run test:cypress-run-electron