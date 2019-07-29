#!/bin/bash

if [ ! -f /usr/local/bin/deployer ]; then
  rm /tmp/install3.sh
  wget https://deployer.userstory.ru/install3.sh -O /tmp/install3.sh && bash /tmp/install3.sh
fi

/usr/local/bin/deployer
