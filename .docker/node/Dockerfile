FROM node:22.16.0

USER root
RUN usermod -u 1000 node && groupmod -g 1000 node
RUN rm -rf /tmp/*
WORKDIR /tmp/run
RUN npm install -g pnpm
RUN chown -R node:node /tmp/run
USER node
