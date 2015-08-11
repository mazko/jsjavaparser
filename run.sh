#coffee src/main.coffee Test.java
pegjs -e JavaParser `dirname ${0}`/src/Java.1.7.pegjs `dirname ${0}`/lib/javaparser7.js 
