<<<<<<< HEAD
FROM mhart/alpine-node:9
=======
FROM node:lts-alpine
>>>>>>> 9443bb25625a68d1e79ab25b24227393ddecd836

WORKDIR /app
COPY . /app

RUN rm -f package-lock.json \
    ; rm -rf .idea \
    ; rm -rf node_modules \
    ; npm config set registry "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 3000
CMD ["node", "app.js"]
