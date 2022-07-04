FROM node:16

RUN mkdir /counter
WORKDIR /counter

ADD package.json /counter/package.json
RUN npm install
# RUN npm install -g nodemon

COPY . /counter

CMD npm start

EXPOSE 3000