# npm install pegjs umd
pegjs `dirname ${0}`/src/Java.1.7.pegjs `dirname ${0}`/lib/javaparser7.node.js && \
umd JavaParser -c < `dirname ${0}`/lib/javaparser7.node.js > `dirname ${0}`/lib/javaparser7.js  
