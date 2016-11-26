FROM mhart/alpine-node:6
WORKDIR /chocobot
ADD . /chocobot
RUN npm install
EXPOSE 3032
CMD ["npm", "start"]
