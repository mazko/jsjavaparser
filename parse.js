/*
  Copyright (C) 2015 Oleg Mazko <o.mazko@mail.ru>
  Mostly copypast from Esprima Demo http://esprima.org/demo/parse.html
  
  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

"use strict";

(function() {

    var parseId;

    function id(i) {
        return document.getElementById(i);
    }

    function parse(delay) {
        if (parseId) {
            window.clearTimeout(parseId);
        }

        parseId = window.setTimeout(function () {
            var code, result, str;

            code = window.editor.getText();
            id('info').className = 'alert-box secondary';

            try {
                result = JavaParser.parse(code);
                str = JSON.stringify(result, null, 4);
                id('info').innerHTML = 'No error';
            } catch (err) {
                str = err.name === 'SyntaxError' 
                    ? "Location: " + JSON.stringify(err.location, null, 4) + "\n" + err
                    : err.name + ': ' + err.message;
                id('info').innerHTML  = str;
                id('info').className = 'alert-box alert';
            }

            id('syntax').value = str;

            parseId = undefined;
        }, delay || 811);
    }

    window.onload = function () {
        require(["orion/editor/edit"], function(edit) {
           window.editor = edit({className: "editor"});
           window.editor.getTextView().getModel().addEventListener("Changed", function () { parse(); });
           parse(42);
        });
    };

})();