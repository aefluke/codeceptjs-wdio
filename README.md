# sahibinden-ui
docker pull codeception/codeceptjs
docker-compose up -d
docker run --net=host -v $PWD:/tests -e HEADLESS=true -e BROWSERS="chrome,firefox" codeception/codeceptjs npm run codeceptjs:parallel