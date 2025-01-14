# Stage 1: Build
FROM public.ecr.aws/docker/library/node:iron-alpine3.21 AS builder

# Install build dependencies
RUN apk add --no-cache build-base python3

WORKDIR /usr/app

# Copy package files and install all dependencies
COPY package*.json ./ 
RUN npm install

# Copy the rest of the application files and build the TypeScript project
COPY . ./ 
RUN npm run build

# Create required directories in the build stage
RUN mkdir -p public/temp

# Stage 2: Runtime
FROM public.ecr.aws/docker/library/node:iron-alpine3.21

WORKDIR /usr/app

# Install production dependencies only
COPY package*.json ./ 
RUN npm install --only=production

# Copy the built files (including created directories) from the builder stage
COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/public ./public 
COPY .env ./ 

# Expose port and set CMD
EXPOSE 8000
CMD ["node", "dist/src/server.js"]
