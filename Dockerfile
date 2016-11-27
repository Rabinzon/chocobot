FROM mhart/alpine-node:6
RUN npm install
EXPOSE 3032
CMD cd /home && npm i && npm start
