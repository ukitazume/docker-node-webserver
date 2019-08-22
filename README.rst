**************
node-webserver
**************

.. image:: https://img.shields.io/docker/automated/netresearch/node-webserver   :alt: Docker Automated build
.. image:: https://img.shields.io/docker/build/netresearch/node-webserver   :alt: Docker Build Status

Provides a minimal webserver (via Express.js) to expose static files from the Docker host via HTTP.
This image is build on Alpine Linux (base image `alpine:node`) and aims for a minimal size.

Usage
=====

You can expose a local directory which you want to have served via the `mini-webserver` by starting it with

`docker run --name node-web -p 8080:8080 -v /path/to/local/folder:/app/public:ro -d netresearch/node-webserver`

In this example, the port on the docker host where the `node-webserver` is reachable is `8080`.

----------------------
docker-compose example
----------------------

.. code:: yaml
 
  version: '3.5'
  services:
    app:
      image: netresearch/node-webserver
      environment:
      - VIRTUAL_HOST=my.example.com
      - VIRTUAL_NETWORK=webproxy
      - VIRTUAL_PORT=8080
      volumes:
      - ./app:/app/public:ro
      restart: always

  networks:
    default:
      external:
        name: webproxy

-------------
Customization
-------------

You can override `customize.js <customize.js>`_ in order to customize the `express application <http://expressjs.com/en/4x/api.html#app>`_.

-------
Logging
-------

The Express.js app uses `morgan` to pipe the web logs to the `STDOUT`. This means that the logs are visible via
`docker logs node-web` (if the container name is `node-web`).
