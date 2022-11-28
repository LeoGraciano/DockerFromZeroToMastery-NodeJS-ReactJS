FROM node:14.15.0
WORKDIR /app
COPY ["package.json", "package-lock.json", "wait-for.sh", "startup.sh", "./"]
RUN apt update  && apt install netcat -y && chmod +x ./wait-for.sh ./startup.sh && npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
# FROM node:14.15.0
# WORKDIR /app
# COPY ["package.json", "package-lock.json", "wait-for.sh", "startup.sh", "./"]
# RUN apt update  && apt install netcat -y && chmod +x ./wait-for.sh ./startup.sh && npm install
# COPY . .
# EXPOSE 5000
# CMD ["npm", "start"]