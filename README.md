# DhD 2023

The website relies on an already existing wordpress website and maes use of their REST api to get contents.
In development, a proxy would automatically send the requests to the server specified in the `.env` file.

    npm install
    npm run start

## Deploy in production

The current github action workflow [docker-build-publish](https://github.com/C2DH/dhd2023/blob/master/.github/workflows)
automatically creates and pushes the `:latest` docker image to our dockerhub account.
In the `/docker` folder there is a docker-compose.yml that allows you to test the latest built image just by running

    cd ./docker
    docker-compose up

or using makefile

    make run-docker-image

and check [http://localhost](http://localhost) on your browser.
