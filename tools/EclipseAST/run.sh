# TODO: javadoc, extendedOperands not implemented - removing from JSON output
# Usage: ./run.sh -c '../../Test.java'
javac -Xlint:deprecation -cp 'lib/*' *.java && java -Xss4m -cp .:'lib/*' App "$@" 2>&1 | \
sed '/^[ \t]*javadoc: null,$/d' | sed '/^[ \t]*extendedOperands: \[\]$/d' | \
tee /dev/tty | xclip -selection clipboard