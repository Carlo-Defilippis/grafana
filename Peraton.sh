#!/bin/bash

gnome-terminal -- sh -c 'echo "**This window will gather dependencies for the server and build+run, visit http://localhost:3000 when finished!**" && make deps-go && make run'
gnome-terminal -- sh -c 'echo "**This window will gather dependencies for the Frontend and build+run**" && make deps-js && make build-js'
