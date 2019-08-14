FROM prismagraphql/prisma:1.34
ARG PRISMA_CONFIG_PATH
ENV PRISMA_CONFIG_PATH prisma.yml
COPY config.yml prisma.yml
EXPOSE 4466