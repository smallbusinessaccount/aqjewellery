# Use an official Nginx image as the base image
FROM nginx:alpine

# # Copy files to the container
# COPY index.html /usr/share/nginx/html
# COPY script.js /usr/share/nginx/html
# COPY index.html /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Define the command to start the server
CMD ["nginx", "-g", "daemon off;"]
